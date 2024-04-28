import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from "@dpticketingdeev/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
