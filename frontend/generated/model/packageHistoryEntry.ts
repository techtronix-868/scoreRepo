/**
 * ECE 461 - Spring 2023 - Project 2
 * API for ECE 461/Spring 2023/Project 2: A Trustworthy Module Registry
 *
 * OpenAPI spec version: 2.0.0
 * Contact: davisjam@purdue.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PackageMetadata } from './packageMetadata';
import { User } from './user';

/**
 * One entry of the history of this package.
 */
export interface PackageHistoryEntry { 
    user: User;
    /**
     * Date of activity using ISO-8601 Datetime standard in UTC format.
     */
    date: Date;
    packageMetadata: PackageMetadata;
    action: PackageHistoryEntry.ActionEnum;
}
export namespace PackageHistoryEntry {
    export type ActionEnum = 'CREATE' | 'UPDATE' | 'DOWNLOAD' | 'RATE';
    export const ActionEnum = {
        CREATE: 'CREATE' as ActionEnum,
        UPDATE: 'UPDATE' as ActionEnum,
        DOWNLOAD: 'DOWNLOAD' as ActionEnum,
        RATE: 'RATE' as ActionEnum
    };
}