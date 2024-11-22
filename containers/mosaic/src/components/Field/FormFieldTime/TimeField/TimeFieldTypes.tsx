import type { FieldDefBase } from "@root/components/Field";

export type TimeFieldInputSettings = never;

export interface TimeData {
	time?: Date;
	validTime: boolean;
}

export type FieldDefTime = FieldDefBase<"time", TimeFieldInputSettings>;

export type TimeTuple = [number, number, number, number];
