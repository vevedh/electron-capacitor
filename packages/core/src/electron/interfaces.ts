import { BrowserWindowConstructorOptions, MenuItem } from "electron";

/** @internal */
export interface SplashOptions {
  imageFilePath?: string;
  windowWidth?: number;
  windowHeight?: number;
}

/** @internal */
export interface DeeplinkingOptions {
  customProtocol: string;
}

export interface CapacitorElectronConfig {
  trayMenu?: {
    useTrayMenu?: boolean;
    trayIconPath?: string;
    trayContextMenu?: MenuItem[];
  };
  splashScreen?: {
    /** Whether or not to show a splash screen on startup. __Default is: true__ */
    useSplashScreen?: boolean;
    splashOptions?: {
      /** Where the splash screen image is located. __Default is:__ `path.join(app.getAppPath(), "assets", "splash.png")` */
      imageFilePath?: string;
      /** Window width in px. __Default is: 400__ */
      windowWidth?: number;
      /** Window height in px. __Default is: 400__ */
      windowHeight?: number;
    };
  };
  /** Define your applications native menu bar. Set to _null_ if you want to hide the bar. __Default is:__
   * ```
   *   [
   *     {role: process.platform === "darwin" ? 'appMenu' : 'fileMenu'},
   *     { role: "viewMenu" }
   *   ]
   * ```
   */
  applicationMenuTemplate?: { [key: string]: any }[] | null;
  mainWindow?: {
    windowOptions?: BrowserWindowConstructorOptions;
  };
}

export interface ElectronCapacitorDeeplinkingConfig {
  customProtocol: string;
  customHandler?: (url: string) => void;
}
