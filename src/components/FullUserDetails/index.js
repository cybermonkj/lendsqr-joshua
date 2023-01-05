import React from "react";

import { Column, Text, Row, List, Line } from "components";

const FullUserDetails = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Text className="font-medium font-worksans text-[16px] text-indigo_800 w-[auto]">
          Personal Information
        </Text>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              full Name
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.FullName}
            </Text>
          </Column>
          <Column className="flex flex-col md:ml-[68px] ml-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Phone Number
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.phoneNumber}
            </Text>
          </Column>
          <Column className="flex flex-col ml-[100px] md:ml-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Email Address
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.email}
            </Text>
          </Column>
          <Column className="flex flex-col ml-[102px] md:ml-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Bvn
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.bvn}
            </Text>
          </Column>
          <Column className="flex flex-col ml-[100px] md:ml-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Gender
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.gender}
            </Text>
          </Column>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:w-[100%] w-[62%]">
          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Marital status
            </Text>
            <Text className="font-medium font-worksans mt-[10px] sm:mt-[5px] md:mt-[6px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.marritalstatus}
            </Text>
          </Column>
          <Column className="flex flex-col justify-start mb-[2px] ml-[103px] md:ml-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Children
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.numberOfChildren}
            </Text>
          </Column>
          <Column className="flex flex-col justify-start mb-[2px] ml-[145px] md:ml-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Type of residence
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.residenceType}
            </Text>
          </Column>
        </Row>
        <Text className="font-medium font-worksans sm:mt-[30px] md:mt-[39px] mt-[58px] text-[16px] text-indigo_800 w-[auto]">
          Education and Employment
        </Text>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              level of education
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.levelofEducation}
            </Text>
          </Column>
          <Column className="flex flex-col md:ml-[68px] ml-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              employment status
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.employmenStatus}
            </Text>
          </Column>
          <Column className="flex flex-col md:ml-[109px] ml-[159px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              sector of employment
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.employmentSector}
            </Text>
          </Column>
          <Column className="flex flex-col md:ml-[55px] ml-[81px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Duration of employment
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.employmentDuration}
            </Text>
          </Column>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:w-[100%] w-[68%]">
          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              office email
            </Text>
            <Text className="font-medium font-worksans mt-[10px] sm:mt-[5px] md:mt-[6px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.officeEmail}
            </Text>
          </Column>
          <Column className="flex flex-col md:ml-[51px] ml-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Monthly income
            </Text>
            <Text className="font-medium font-worksans mt-[10px] sm:mt-[5px] md:mt-[6px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.monthlyIncome}
            </Text>
          </Column>
          <Column className="flex flex-col md:ml-[51px] ml-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              loan repayment
            </Text>
            <Text className="font-medium font-worksans mt-[10px] sm:mt-[5px] md:mt-[6px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.loanRepayment}
            </Text>
          </Column>
        </Row>
        <Text className="font-medium font-worksans sm:mt-[31px] md:mt-[41px] mt-[60px] text-[16px] text-indigo_800 w-[auto]">
          Socials
        </Text>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:w-[100%] w-[58%]">
          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Twitter
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.twitterUsername}
            </Text>
          </Column>
          <Column className="flex flex-col md:ml-[57px] ml-[84px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Facebook
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.facebookUsername}
            </Text>
          </Column>
          <Column className="flex flex-col ml-[103px] md:ml-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
            <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
              Instagram
            </Text>
            <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
              {props?.instagramUsername}
            </Text>
          </Column>
        </Row>
        <Text className="font-medium font-worksans sm:mt-[31px] md:mt-[41px] mt-[60px] text-[16px] text-indigo_800 w-[auto]">
          Guarantor
        </Text>
        <List
          className="gap-[109px] sm:gap-[58px] md:gap-[75px] grid min-h-[auto] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:w-[100%] w-[80%]"
          orientation="vertical"
        >
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
              <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
                full Name
              </Text>
              <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
                {props?.guarantoName}
              </Text>
            </Column>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
              <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
                Phone Number
              </Text>
              <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
                {props?.guarantorPhone}
              </Text>
            </Column>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
              <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
                Email Address
              </Text>
              <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
                {props?.guarantorEmail}
              </Text>
            </Column>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
              <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
                Relationship
              </Text>
              <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
                {props?.guarantorRelationship}
              </Text>
            </Column>
          </Row>
          <Line className="self-center w-[100%] h-[1px] bg-indigo_800_63" />
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
              <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
                full Name
              </Text>
              <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
                {props?.gaurantorname}
              </Text>
            </Column>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
              <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
                Phone Number
              </Text>
              <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
                07060780922
              </Text>
            </Column>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
              <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
                Email Address
              </Text>
              <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
                debby@gmail.com
              </Text>
            </Column>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
              <Text className="font-normal font-worksans not-italic text-[12px] text-bluegray_600 uppercase w-[auto]">
                Relationship
              </Text>
              <Text className="font-medium font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_600 w-[auto]">
                Sister
              </Text>
            </Column>
          </Row>
        </List>
      </Column>
    </>
  );
};

export default FullUserDetails;
