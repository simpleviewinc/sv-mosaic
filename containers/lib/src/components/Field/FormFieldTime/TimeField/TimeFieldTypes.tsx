import { FieldDefBase } from "@root/components/Field";

export type TimeFieldInputSettings = never;

export type TimeData = {
	time?: Date;
	validTime: boolean;
};

export type FieldDefTime = FieldDefBase<"time", TimeFieldInputSettings>;

export type TimeTuple = [number, number, number, number];
