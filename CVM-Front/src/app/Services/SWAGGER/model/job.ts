/**
 * TalentVault API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Category } from './category';
import { NatureOfEmployment } from './natureOfEmployment';
import { Location } from './location';


export interface Job { 
    id?: number;
    createdAt?: string | null;
    updatedAt?: string | null;
    createdBy?: string | null;
    modifiedBy?: string | null;
    tenantId?: number;
    designation?: string | null;
    description?: string | null;
    startSalary?: number;
    endSalary?: number;
    categories?: Array<Category> | null;
    employment?: NatureOfEmployment;
    location?: Location;
}
export namespace Job {
}


