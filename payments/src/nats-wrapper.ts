import nats, { Stan } from "node-nats-streaming";

export class NatsWrapper {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      throw new Error("There is no client.");
    }
    return this._client;
  }

  async connect(clusterId: string, clientId: string, url: string) {
    const connectWithRetry = async (): Promise<void> => {
      try {
        this._client = nats.connect(clusterId, clientId, { url });

        return new Promise<void>((resolve, reject) => {
          this._client!.on("connect", () => {
            console.log("Connected to NATS");
            resolve();
          });

          this._client!.on("error", (err) => {
            reject(err);
          });

          this._client!.on("reconnecting", () => {
            console.log("Reconnecting to NATS...");
          });

          this._client!.on("reconnect", (nc) => {
            console.log("Reconnected to NATS");
          });
        });
      } catch (err) {
        console.error("Error connecting to NATS:", err);

        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log("Retrying to connect to NATS...");
        return connectWithRetry();
      }
    };

    await connectWithRetry();
  }
}

export const natsWrapper = new NatsWrapper();
