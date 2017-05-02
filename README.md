Destiny API Wrapper


Building:


node-destiny uses my automated api wrapper generator (lib/autowrapper)
to build. 

the list of endpoints is pulled from https://raw.githubusercontent.com/DestinyDevs/BungieNetPlatform/master/wiki-builder/data/endpoints.json,
and should be up to date. 

Currently the API Wrapper generator doesn't support POST endpoints or endpoints that require oAuth, however this is planned in future versions. 
How to build:

```
npm install
npm prepare
npm build
```
---

#Endpoints:

GetPublicAdvisorsV2(options, callback)
Example:
```js
wrapper.GetPublicAdvisorsV2({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetPublicAdvisorsV2) 

---
GetAdvisorsForAccount(options, callback)
Example:
```js
wrapper.GetAdvisorsForAccount({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetAdvisorsForAccount) 

---
GetAdvisorsForCharacterV2(options, callback)
Example:
```js
wrapper.GetAdvisorsForCharacterV2({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetAdvisorsForCharacterV2) 

---
GetDestinyManifest(options, callback)
Example:
```js
wrapper.GetDestinyManifest({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetDestinyManifest) 

---
GetDestinySingleDefinition(options, callback)
Example:
```js
wrapper.GetDestinySingleDefinition({
	definitionType: null,
	definitionId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetDestinySingleDefinition) 

---
SearchDestinyPlayer(options, callback)
Example:
```js
wrapper.SearchDestinyPlayer({
	membershipType: null,
	displayName: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/SearchDestinyPlayer) 

---
GetItemReferenceDetail(options, callback)
Example:
```js
wrapper.GetItemReferenceDetail({
	param1: null,
	param2: null,
	param3: null,
	param4: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetItemReferenceDetail) 

---
GetAllItemsSummary(options, callback)
Example:
```js
wrapper.GetAllItemsSummary({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetAllItemsSummary) 

---
GetAccount(options, callback)
Example:
```js
wrapper.GetAccount({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetAccount) 

---
GetAccountSummary(options, callback)
Example:
```js
wrapper.GetAccountSummary({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetAccountSummary) 

---
GetVault(options, callback)
Example:
```js
wrapper.GetVault({
	membershipType: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetVault) 

---
GetVaultSummary(options, callback)
Example:
```js
wrapper.GetVaultSummary({
	membershipType: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetVaultSummary) 

---
GetCharacterSummary(options, callback)
Example:
```js
wrapper.GetCharacterSummary({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetCharacterSummary) 

---
GetCharacter(options, callback)
Example:
```js
wrapper.GetCharacter({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetCharacter) 

---
GetCharacterInventory(options, callback)
Example:
```js
wrapper.GetCharacterInventory({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetCharacterInventory) 

---
GetCharacterInventorySummary(options, callback)
Example:
```js
wrapper.GetCharacterInventorySummary({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetCharacterInventorySummary) 

---
GetItemDetail(options, callback)
Example:
```js
wrapper.GetItemDetail({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null,
	itemInstanceId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetItemDetail) 

---
GetCharacterActivities(options, callback)
Example:
```js
wrapper.GetCharacterActivities({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetCharacterActivities) 

---
GetCharacterProgression(options, callback)
Example:
```js
wrapper.GetCharacterProgression({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetCharacterProgression) 

---
GetTriumphs(options, callback)
Example:
```js
wrapper.GetTriumphs({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetTriumphs) 

---
GetRecordBookCompletionStatus(options, callback)
Example:
```js
wrapper.GetRecordBookCompletionStatus({
	membershipType: null,
	recordBookHash: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetRecordBookCompletionStatus) 

---
GetAllVendorsForCurrentCharacter(options, callback)
Example:
```js
wrapper.GetAllVendorsForCurrentCharacter({
	membershipType: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetAllVendorsForCurrentCharacter) 

---
GetVendorSummariesForCurrentCharacter(options, callback)
Example:
```js
wrapper.GetVendorSummariesForCurrentCharacter({
	membershipType: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetVendorSummariesForCurrentCharacter) 

---
GetVendorForCurrentCharacter(options, callback)
Example:
```js
wrapper.GetVendorForCurrentCharacter({
	membershipType: null,
	characterId: null,
	vendorId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetVendorForCurrentCharacter) 

---
GetVendorItemDetailForCurrentCharacter(options, callback)
Example:
```js
wrapper.GetVendorItemDetailForCurrentCharacter({
	membershipType: null,
	characterId: null,
	vendorId: null,
	itemId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetVendorItemDetailForCurrentCharacter) 

---
GetPublicAdvisors(options, callback)
Example:
```js
wrapper.GetPublicAdvisors({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetPublicAdvisors) 

---
GetPublicXurVendor(options, callback)
Example:
```js
wrapper.GetPublicXurVendor({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetPublicXurVendor) 

---
GetPublicVendor(options, callback)
Example:
```js
wrapper.GetPublicVendor({
	vendorId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetPublicVendor) 

---
GetAdvisorsForCurrentCharacter(options, callback)
Example:
```js
wrapper.GetAdvisorsForCurrentCharacter({
	membershipType: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetAdvisorsForCurrentCharacter) 

---
GetAdvisorsForCharacter(options, callback)
Example:
```js
wrapper.GetAdvisorsForCharacter({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetAdvisorsForCharacter) 

---
GetSpecialEventAdvisors(options, callback)
Example:
```js
wrapper.GetSpecialEventAdvisors({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetSpecialEventAdvisors) 

---
GetDestinyLiveTileContentItems(options, callback)
Example:
```js
wrapper.GetDestinyLiveTileContentItems({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetDestinyLiveTileContentItems) 

---
GetBondAdvisors(options, callback)
Example:
```js
wrapper.GetBondAdvisors({
	membershipType: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetBondAdvisors) 

---
GetPublicVendorWithMetadata(options, callback)
Example:
```js
wrapper.GetPublicVendorWithMetadata({
	vendorId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetPublicVendorWithMetadata) 

---
GetVendorForCurrentCharacterWithMetadata(options, callback)
Example:
```js
wrapper.GetVendorForCurrentCharacterWithMetadata({
	membershipType: null,
	characterId: null,
	vendorId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetVendorForCurrentCharacterWithMetadata) 

---
GetVendorItemDetailForCurrentCharacterWithMetadata(options, callback)
Example:
```js
wrapper.GetVendorItemDetailForCurrentCharacterWithMetadata({
	membershipType: null,
	characterId: null,
	vendorId: null,
	itemId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetVendorItemDetailForCurrentCharacterWithMetadata) 

---
GetHistoricalStatsDefinition(options, callback)
Example:
```js
wrapper.GetHistoricalStatsDefinition({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetHistoricalStatsDefinition) 

---
GetHistoricalStats(options, callback)
Example:
```js
wrapper.GetHistoricalStats({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetHistoricalStats) 

---
GetHistoricalStatsForAccount(options, callback)
Example:
```js
wrapper.GetHistoricalStatsForAccount({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetHistoricalStatsForAccount) 

---
GetActivityHistory(options, callback)
Example:
```js
wrapper.GetActivityHistory({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetActivityHistory) 

---
GetUniqueWeaponHistory(options, callback)
Example:
```js
wrapper.GetUniqueWeaponHistory({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetUniqueWeaponHistory) 

---
GetLeaderboards(options, callback)
Example:
```js
wrapper.GetLeaderboards({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetLeaderboards) 

---
GetClanLeaderboards(options, callback)
Example:
```js
wrapper.GetClanLeaderboards({
	param1: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetClanLeaderboards) 

---
GetLeaderboardsForPsn(options, callback)
Example:
```js
wrapper.GetLeaderboardsForPsn({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetLeaderboardsForPsn) 

---
GetLeaderboardsForCharacter(options, callback)
Example:
```js
wrapper.GetLeaderboardsForCharacter({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetLeaderboardsForCharacter) 

---
GetPostGameCarnageReport(options, callback)
Example:
```js
wrapper.GetPostGameCarnageReport({
	activityInstanceId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetPostGameCarnageReport) 

---
GetActivityBlob(options, callback)
Example:
```js
wrapper.GetActivityBlob({
	e: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetActivityBlob) 

---
GetDestinyAggregateActivityStats(options, callback)
Example:
```js
wrapper.GetDestinyAggregateActivityStats({
	membershipType: null,
	destinyMembershipId: null,
	characterId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetDestinyAggregateActivityStats) 

---
GetMembershipIdByDisplayName(options, callback)
Example:
```js
wrapper.GetMembershipIdByDisplayName({
	membershipType: null,
	displayName: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetMembershipIdByDisplayName) 

---
GetExcellenceBadges(options, callback)
Example:
```js
wrapper.GetExcellenceBadges({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetExcellenceBadges) 

---
GetMyGrimoire(options, callback)
Example:
```js
wrapper.GetMyGrimoire({
	membershipType: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetMyGrimoire) 

---
GetGrimoireByMembership(options, callback)
Example:
```js
wrapper.GetGrimoireByMembership({
	membershipType: null,
	destinyMembershipId: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetGrimoireByMembership) 

---
GetGrimoireDefinition(options, callback)
Example:
```js
wrapper.GetGrimoireDefinition({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetGrimoireDefinition) 

---
GetDestinyExplorerItems(options, callback)
Example:
```js
wrapper.GetDestinyExplorerItems({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetDestinyExplorerItems) 

---
GetDestinyExplorerTalentNodeSteps(options, callback)
Example:
```js
wrapper.GetDestinyExplorerTalentNodeSteps({
	: null
}, (error, response, json) => {});
```
[endpoint](http://destinydevs.github.io/BungieNetPlatform/docs/DestinyService/GetDestinyExplorerTalentNodeSteps) 

---
