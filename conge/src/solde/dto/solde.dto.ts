import { Types } from "mongoose";

export class SoldeDto {
    readonly user: Types.ObjectId;
    readonly totalSickDays: number;
    readonly totalVacationDays: number;
    readonly totalPersonalDays: number;
    readonly totalOtherDays: number;
}
export default SoldeDto;