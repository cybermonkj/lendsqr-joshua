import React from "react";

import { Column, Row, Stack, Img, Text, Line } from "components";

const Userdetails = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mr-[192px] md:mr-[249px] mr-[362px] sm:w-[100%] w-[63%]">
          <Stack className="bg-indigo_800_68 h-[100px] sm:p-[15px] md:p-[20px] p-[30px] relative rounded-radius50 w-[100px] sm:w-[53px] md:w-[68px]">
            <Img
              src="images/img_search_indigo_800.svg"
              className="absolute h-[40px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
              alt="search One"
            />
          </Stack>
          <Column className="flex flex-col sm:mb-[12px] md:mb-[16px] mb-[24px] md:ml-[13px] ml-[20px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
            <Text className="font-medium font-worksans sm:text-[18px] md:text-[20px] text-[22px] text-indigo_800 w-[auto]">
              Grace Effiom
            </Text>
            <Text className="font-normal font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[14px] text-bluegray_600 w-[auto]">
              {props?.id}
            </Text>
          </Column>
          <Line className="bg-bluegray_600_6c sm:h-[43px] md:h-[56px] h-[80px] sm:ml-[15px] md:ml-[19px] ml-[29px] my-[10px] sm:my-[5px] md:my-[6px] w-[1px]" />
          <Column className="flex flex-col items-center md:ml-[19px] ml-[29px] sm:mx-[0] sm:my-[15px] md:my-[19px] my-[29px] sm:px-[0] sm:w-[100%] w-[12%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Text className="font-medium font-worksans text-[14px] text-bluegray_600 w-[auto]">
                {props?.tier}
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                <Img
                  src="images/img_star.svg"
                  className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                  alt="star"
                />
                <Img
                  src="images/img_star_16X16.svg"
                  className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                  alt="star One"
                />
                <Img
                  src="images/img_star_16X16.svg"
                  className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[4px] md:w-[11px] w-[16px] sm:w-[8px]"
                  alt="star Two"
                />
              </Row>
            </Column>
          </Column>
          <Line className="bg-bluegray_600_6c sm:h-[43px] md:h-[56px] h-[80px] sm:ml-[15px] md:ml-[20px] ml-[30px] my-[10px] sm:my-[5px] md:my-[6px] w-[1px]" />
          <Column className="flex flex-col sm:mb-[14px] md:mb-[18px] mb-[27px] md:ml-[19px] ml-[29px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
            <Text className="font-medium font-worksans sm:text-[18px] md:text-[20px] text-[22px] text-indigo_800 w-[auto]">
              {props?.balance}
            </Text>
            <Text className="font-normal font-worksans ml-[3px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-indigo_800 w-[auto]">
              {props?.account}
            </Text>
          </Column>
        </Row>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[27px] md:mt-[35px] mt-[51px] w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
            <Text className="font-normal font-worksans not-italic text-[16px] text-cyan_400 w-[auto]">
              General Details
            </Text>
            <Line className="bg-cyan_400 h-[2px] mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]" />
          </Column>
          <Text className="font-normal font-sfcompacttext mb-[12px] sm:mb-[6px] md:mb-[8px] not-italic text-[16px] text-black_900_cc w-[auto]">
            Documents
          </Text>
          <Text className="font-normal font-sfcompacttext mb-[12px] sm:mb-[6px] md:mb-[8px] not-italic text-[16px] text-black_900_cc w-[auto]">
            Bank Details
          </Text>
          <Text className="font-normal font-sfcompacttext mb-[12px] sm:mb-[6px] md:mb-[8px] not-italic text-[16px] text-black_900_cc w-[auto]">
            Loans
          </Text>
          <Text className="font-normal font-sfcompacttext mb-[12px] sm:mb-[6px] md:mb-[8px] not-italic text-[16px] text-black_900_cc w-[auto]">
            Savings
          </Text>
          <Text className="font-normal font-sfcompacttext mb-[12px] sm:mb-[6px] md:mb-[8px] not-italic text-[16px] text-black_900_cc w-[auto]">
            App and System
          </Text>
        </Row>
      </Column>
    </>
  );
};

export default Userdetails;
