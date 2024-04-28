import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@dpticketingdeev/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
