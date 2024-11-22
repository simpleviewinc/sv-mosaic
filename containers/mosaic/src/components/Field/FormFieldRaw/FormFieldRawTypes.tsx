import type { FieldDefBase } from "@root/components/Field";
import type { ReactNode } from "react";

export type RawInputSettings = never;

export type FieldDefRawData = ReactNode;

export type FieldDefRaw = FieldDefBase<"raw", RawInputSettings>;
