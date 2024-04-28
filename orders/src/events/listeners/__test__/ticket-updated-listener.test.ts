import { TicketUpdatedEvent } from "@dpticketingdeev/common";
import { natsWrapper } from "../../../nats-wrapper";
import { TicketUpdatedListener } from "../ticket-updated-listener";
import mongoose from "mongoose";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../../models/ticket";

const setup = async () => {
  const listener = new TicketUpdatedListener(natsWrapper.client);

  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "concert",
    price: 10,
  });
  await ticket.save();

  const data: TicketUpdatedEvent["data"] = {
    version: ticket.version + 1,
    id: ticket.id,
    title: "new concert",
    price: 999,
    userId: new mongoose.Types.ObjectId().toHexString(),
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return {
    listener,
    data,
    msg,
    ticket,
  };
};

it("finds, updates, ans saves a ticket", async () => {
  const { listener, data, msg, ticket } = await setup();

  console.log(await Ticket.find({}), data);

  // call the onMessage function with the data object + message object
  await listener.onMessage(data, msg);

  // write asserions to make sure a ticket was created
  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket?.title).toEqual(data!.title);
  expect(updatedTicket?.price).toEqual(data!.price);
  expect(updatedTicket?.version).toEqual(data!.version);
});

it("acks the message", async () => {
  const { listener, data, msg } = await setup();

  // call the onMessage function with the data object + message object
  await listener.onMessage(data, msg);

  // write asserions to make sure a acks was called
  expect(msg.ack).toHaveBeenCalled();
});

it("not call acks if event is skipped", async () => {
  const { listener, data, msg, ticket } = await setup();

  data.version = 10;
  try {
    await listener.onMessage(data, msg);
  } catch (err) {}

  expect(msg.ack).not.toHaveBeenCalled();
});
