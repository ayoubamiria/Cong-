import { Types } from "mongoose";

export class CreateCongeDto {
    readonly user: Types.ObjectId;
    readonly startDate: Date;
    readonly endDate: Date ;
    readonly type: string;
    readonly status: string;
    readonly reason: string;
}
export default CreateCongeDto;