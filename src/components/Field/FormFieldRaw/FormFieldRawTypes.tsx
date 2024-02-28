import { FieldDefBase } from "@root/components/Field";
import { ReactNode } from "react";

export type RawInputSettings = never;

export type FieldDefRawData = ReactNode;

export type FieldDefRaw = FieldDefBase<"raw", RawInputSettings>;
