<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Book Appointment</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>f855d5ac-5c0f-46d0-aeea-865bfa205ca3</testSuiteGuid>
   <testCaseLink>
      <guid>14ab7cb7-32c3-4c4a-83f0-201dd72d5a0e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/LoginTestNegative</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>b295baac-0e68-4e8a-9445-b60abb294884</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/LoginTestPositifNegative</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>305667d3-2017-4e02-88c4-dd4ce2cfcbc8</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/LoginTestPositive</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>d4c39b9f-5c79-48eb-ab77-eca618f0f1cc</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Appointment/Booking</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>d4c39b9f-5c79-48eb-ab77-eca618f0f1cc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>5e51da9b-900c-4bc0-9c59-e61f814b0a93</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>d4c39b9f-5c79-48eb-ab77-eca618f0f1cc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>15305c99-3bdd-44f4-9915-bed98433b401</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>b48ca17c-f1ee-4046-9073-ce868542a861</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/LoginTestPositiveNegative2</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
