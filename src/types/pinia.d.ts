// src/types/pinia.d.ts
import { Pinia } from "pinia";

declare module "pinia" {
  export declare const defineStore: Pinia["defineStore"];
}
