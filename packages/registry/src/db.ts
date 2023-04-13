interface App {
  path: string;
}

class DB {
  protected apps: { [id: string]: App } = {};

  registerApp(id: string, app: App) {
    this.apps[id] = app;
  }

  unregisterApp(id: string) {
    delete this.apps[id];
  }

  getApp(id: string) {
    return this.apps[id];
  }

  list() {
    return this.apps;
  }
}

export default DB;
