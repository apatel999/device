# device
FrontEnd

//install npm package

```
 npm i 
 npm run start
```

BackEnd

First run migration sql script on DB server to setup schema and test data. Configure connection string in appsettings.json.

NOTE: Add "Authorization" header with any value for basic authentication. Presently token is not validated.

Questions-Answers

1. From testing perspective I prefer Style #1. These tests are how system should behave based on requirement and are not E2E tests.
Test should verify does it meet requirements or not.

2. In style #1 system is not for developer, it is for user so requirement should be written in user context not developer.
It should say "System should show information about device so that user can manage hardware"

- System should be fast is broad term. It should be more specific.	 For example it should say response time should less than 3 sec.

3. Some of tests
	- System list all possible devices
	- System list Device possible status
	- device icon css class match with type.
	- System response time less than expected time
