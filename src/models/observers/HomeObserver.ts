import { HomePage } from "pages/HomePage";

export class HomeObserver {
  private observer: HomePage;
  private static instance: HomeObserver;

  private constructor() {}

  public static observable() {
    if (!this.instance) {
      this.instance = new HomeObserver();
    }

    return this.instance;
  }

  public registerObserver(observer: HomePage): void {
    this.observer = observer;
  }

  public update() {
    const { rerender } = this.observer as any;

    rerender();
  }
}
