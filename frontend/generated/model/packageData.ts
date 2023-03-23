/**
 * ECE 461 - Fall 2021 - Project 2
 * API for ECE 461/Fall 2021/Project 2: A Trustworthy Module Registry
 *
 * OpenAPI spec version: 2.0.0
 * Contact: davisjam@purdue.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * This is a \"union\" type. - On package upload, either Content or URL should be set. - On package update, exactly one field should be set. - On download, the Content field should be set.
 */
export interface PackageData { 
    /**
     * Package contents. This is the zip file uploaded by the user. (Encoded as text using a Base64 encoding).  This will be a zipped version of an npm package's GitHub repository, minus the \".git/\" directory.\" It will, for example, include the \"package.json\" file that can be used to retrieve the project homepage.  See https://docs.npmjs.com/cli/v7/configuring-npm/package-json#homepage.
     */
    content?: string;
    /**
     * Package URL (for use in public ingest).
     */
    URL?: string;
    /**
     * A JavaScript program (for use with sensitive modules).
     */
    jSProgram?: string;
}