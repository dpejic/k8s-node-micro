import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@dpticketingdeev/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
