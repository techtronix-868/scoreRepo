/*
 * ECE 461 - Fall 2021 - Project 2
 *
 * API for ECE 461/Fall 2021/Project 2: A Trustworthy Module Registry
 *
 * API version: 2.0.0
 * Contact: davisjam@purdue.edu
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

import (
	"time"
)

// PackageHistoryEntry - One entry of the history of this package.
type PackageHistoryEntry struct {

	User User `json:"User"`

	// Date of activity.
	Date time.Time `json:"Date"`

	PackageMetadata PackageMetadata `json:"PackageMetadata"`

	// 
	Action string `json:"Action"`
}