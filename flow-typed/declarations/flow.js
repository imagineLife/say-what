/*
Folder for
- type-checking prototypes
- 'utils' 
- declarations:
	'global' declarations
	like...
		() => void
		actionType

NOTE: make a skip-comment
flow non-issue res.json()
*/


declare type actionType = {
	type: string,
	payload?: any
}