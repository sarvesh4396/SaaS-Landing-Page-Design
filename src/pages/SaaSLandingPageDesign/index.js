import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Line } from "components/Line";
import { RatingBar } from "components/RatingBar";

const SaaSLandingPageDesignPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] w-[100%]">
        <Column className="w-[100%]">
          <Stack className="3xl:h-[1021px] lg:h-[662px] xl:h-[757px] h-[850px] 2xl:h-[851px] w-[100%]">
            <Stack className="absolute 3xl:h-[1021px] lg:h-[662px] xl:h-[757px] h-[850px] 2xl:h-[851px] inset-[0] w-[100%]">
              <Stack className="absolute 3xl:h-[1021px] lg:h-[662px] xl:h-[757px] h-[850px] 2xl:h-[851px] inset-[0] w-[100%]">
                <Stack className="absolute 3xl:h-[1021px] lg:h-[662px] xl:h-[757px] h-[850px] 2xl:h-[851px] right-[0] w-[91%]">
                  <div className="absolute backdrop-opacity-[0.3] bg-amber_700 blur-[590.00px] bottom-[5%] lg:h-[212px] xl:h-[242px] h-[272px] 2xl:h-[273px] 3xl:h-[327px] right-[0] rounded-radius136 w-[14%]"></div>
                  <Image
                    src="img_vector65.svg"
                    className="absolute 3xl:h-[1021px] lg:h-[662px] xl:h-[757px] h-[850px] 2xl:h-[851px] object-contain right-[0] w-[61%]"
                    alt="Vector65"
                  />
                  <div className="absolute bg-blue_A400 bottom-[35%] lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] left-[45%] rounded-radius50 lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
                  <Stack className="absolute lg:h-[356px] xl:h-[407px] h-[457.39px] 2xl:h-[458px] 3xl:h-[550px] inset-[0] justify-center m-[auto] w-[96%]">
                    <Row className="absolute items-start justify-between left-[0] top-[0] w-[56%]">
                      <Column className="items-start justify-start lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] w-[82%]">
                        <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-blue_A400 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`We are the best`}</Text>
                        <Column className="lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]">
                          <Stack className="lg:h-[155px] xl:h-[177px] h-[198.03px] 2xl:h-[199px] 3xl:h-[238px] w-[100%]">
                            <Text className="absolute font-bold lg:leading-lh59 xl:leading-lh67 2xl:leading-lh76 leading-lh7600 3xl:leading-lh91 text-bluegray_900 lg:text-fs40 xl:text-fs46 text-fs52 3xl:text-fs62 text-left top-[0] w-[100%]">
                              <span className="text-bluegray_900 font-poppins">
                                <>
                                  {`We provide full-stack`}
                                  <br />
                                  {``}
                                </>
                              </span>
                              <span className="text-teal_400 font-poppins">
                                <>{`Buisness Solution`}</>
                              </span>
                            </Text>
                            <Image
                              src="img_vector.svg"
                              className="absolute bottom-[0] lg:h-[56px] xl:h-[64px] h-[71.03px] 2xl:h-[72px] 3xl:h-[86px] left-[25%] object-contain w-[28%]"
                              alt="Vector"
                            />
                          </Stack>
                        </Column>
                        <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[79%]">
                          {
                            <>
                              {`Manage your work efficiently and easily and it is a simple,`}
                              <br />
                              {`fast and small task manager with a single software.`}
                            </>
                          }
                        </Text>
                        <Column className="lg:mt-[31px] xl:mt-[35px] mt-[39.97px] 2xl:mt-[39px] 3xl:mt-[47px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Button className="bg-teal_700 font-semibold mt-[1px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 shadow-bs text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_50 w-[24%]">{`Get Started`}</Button>
                            <Row className="border border-solid border-teal_400 items-center justify-center mb-[1px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] rounded-radius8 w-[28%]">
                              <Image
                                src="img_polygon1.png"
                                className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] object-contain rounded-radius1 lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                                alt="Polygon1"
                              />
                              <Text className="font-semibold xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-teal_400">{`Watch Video`}</Text>
                            </Row>
                          </Row>
                        </Column>
                      </Column>
                      <Image
                        src="img_shape.svg"
                        className="xl:h-[109px] h-[122px] 2xl:h-[123px] 3xl:h-[147px] lg:h-[95px] lg:mb-[234px] xl:mb-[268px] mb-[302.03px] 2xl:mb-[302px] 3xl:mb-[362px] object-contain opacity-op15 rotate-[90deg] rounded-radius50 w-[122px]"
                        alt="Shape"
                      />
                    </Row>
                    <Column className="absolute bottom-[0] items-center justify-start right-[0] shadow-bs1 w-[56%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Column className="bg-gray-900 border-2 border-gray-700 border-solid items-center justify-start mx-[auto] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[28px] rounded-tr-[28px] w-[81%]">
                          <Stack className="bg-black_900 lg:h-[286px] xl:h-[327px] h-[366.64px] 2xl:h-[367px] 3xl:h-[441px] lg:mb-[11px] xl:mb-[12px] mb-[14.59px] 2xl:mb-[14px] 3xl:mb-[17px] lg:mt-[2px] mt-[3.47px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[22px] rounded-tr-[22px] w-[99%]">
                            <Image
                              src="img_imageprocessin.png"
                              className="absolute lg:h-[260px] xl:h-[297px] h-[333.31px] 2xl:h-[334px] 3xl:h-[401px] inset-[0] justify-center m-[auto] object-contain rounded-radius8 w-[96%]"
                              alt="imageprocessin"
                            />
                          </Stack>
                        </Column>
                        <Image
                          src="img_bottom.png"
                          className="lg:h-[17px] xl:h-[19px] h-[20.83px] 2xl:h-[21px] 3xl:h-[26px] object-cover w-[100%]"
                          alt="Bottom"
                        />
                      </Column>
                      <div className="backdrop-opacity-[0.5] bg-black_900 blur-[44.00px] h-[6.94px] lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] mt-[1px] mx-[auto] rounded-radius347 w-[90%]"></div>
                    </Column>
                  </Stack>
                  <Image
                    src="img_partners.svg"
                    className="absolute bottom-[1%] lg:h-[32px] xl:h-[36px] h-[40.45px] 2xl:h-[41px] 3xl:h-[49px] left-[0] object-contain w-[90%]"
                    alt="Partners"
                  />
                </Stack>
                <div className="absolute bg-green_500 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] left-[42%] rounded-radius50 top-[21%] lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
                <div className="absolute backdrop-opacity-[0.5] bg-amber_700_3f blur-[450.00px] lg:h-[146px] xl:h-[167px] h-[187px] 2xl:h-[188px] 3xl:h-[225px] left-[0] rounded-radius935 top-[0] w-[12%]"></div>
                <header className="absolute inset-x-[0] mx-[auto] top-[8%] w-[81%]">
                  <Row className="items-start justify-start w-[100%]">
                    <Stack className="font-manrope lg:h-[31px] xl:h-[35px] h-[38.62px] 2xl:h-[39px] 3xl:h-[47px] xl:mb-[4px] lg:mb-[4px] mb-[5.38px] 2xl:mb-[5px] 3xl:mb-[6px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[13%]">
                      <div className="absolute bg-teal_700 lg:h-[31px] xl:h-[35px] h-[38.62px] 2xl:h-[39px] 3xl:h-[47px] left-[0] rounded-radius4 lg:w-[30px] xl:w-[34px] w-[38.62px] 2xl:w-[38px] 3xl:w-[46px]"></div>
                      <Text className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[0] lg:text-fs26 xl:text-fs30 text-fs34 3xl:text-fs40 text-left text-teal_900">
                        <span className="text-white_A700 font-inter">
                          <>{`S`}</>
                        </span>
                        <span className="text-teal_700 font-inter">
                          <>{`  `}</>
                        </span>
                        <span className="text-bluegray_900 font-inter">
                          <>{`aaspik`}</>
                        </span>
                      </Text>
                    </Stack>
                    <Row className="font-poppins items-center justify-center xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[209px] xl:ml-[240px] ml-[269.99px] 2xl:ml-[270px] 3xl:ml-[324px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[47%]">
                      <Text className="cursor-pointer hover:font-semibold font-semibold lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-teal_700">{`Home`}</Text>
                      <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[44px] xl:ml-[50px] ml-[57px] 3xl:ml-[68px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left hover:text-teal_700 text-white_A701">{`Features`}</Text>
                      <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left hover:text-teal_700 text-white_A701">{`About`}</Text>
                      <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[44px] xl:ml-[50px] ml-[57px] 3xl:ml-[68px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left hover:text-teal_700 text-white_A701">{`Services`}</Text>
                      <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left hover:text-teal_700 text-white_A701">{`Pricing`}</Text>
                    </Row>
                    <Button className="bg-white_A700 font-poppins font-semibold lg:ml-[57px] xl:ml-[65px] ml-[74px] 3xl:ml-[88px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 shadow-bs text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-teal_700 w-[10%]">{`Login`}</Button>
                  </Row>
                </header>
              </Stack>
              <Column className="absolute items-start justify-start right-[1%] top-[24%] w-[14%]">
                <div className="bg-cyan_50 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] rounded-radius50 lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
                <Column className="items-end lg:mt-[271px] xl:mt-[310px] mt-[349px] 3xl:mt-[419px] w-[100%]">
                  <div className="bg-amber_700 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
                </Column>
              </Column>
            </Stack>
            <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[8%] my-[auto] w-[27%]">
              <div className="bg-pink_A100 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] rounded-radius50 lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
              <Column className="items-end lg:mt-[322px] xl:mt-[369px] mt-[415px] 3xl:mt-[498px] w-[100%]">
                <div className="bg-purple_A700 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] opacity-op5 rounded-radius50 lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
              </Column>
            </Column>
          </Stack>
        </Column>
        <Column className="items-end xl:mt-[100px] mt-[112.45px] 2xl:mt-[112px] 3xl:mt-[135px] lg:mt-[87px] overflow-auto w-[100%]">
          <Column className="items-start justify-start w-[100%]">
            <Column className="w-[100%]">
              <Stack className="lg:h-[1992px] xl:h-[2278px] h-[2560px] 2xl:h-[2562px] 3xl:h-[3074px] w-[100%]">
                <Stack className="absolute lg:h-[1992px] xl:h-[2278px] h-[2560px] 2xl:h-[2562px] 3xl:h-[3074px] inset-[0] w-[100%]">
                  <Column className="absolute bg-bluegray_50 items-center justify-center left-[0] top-[0] w-[91%]">
                    <Column className="items-center justify-start lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] w-[26%]">
                      <Text className="font-medium mx-[auto] text-blue_A400 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Awesome Features`}</Text>
                      <Text className="font-semibold lg:leading-lh37 xl:leading-lh42 2xl:leading-lh48 leading-lh4800 3xl:leading-lh57 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] text-bluegray_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 w-[100%]">{`Valuable features of Saaspik`}</Text>
                    </Column>
                    <List
                      className="lg:gap-[17px] xl:gap-[19px] gap-[22px] 3xl:gap-[26px] grid grid-cols-4 lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] min-h-[auto] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] mx-[auto] w-[81%]"
                      orientation="horizontal"
                    >
                      <Column className="bg-white_A700 items-center justify-start mb-[1px] rounded-radius10 shadow-bs2 w-[100%]">
                        <Image
                          src="img_fluentclipboar.svg"
                          className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[22px] xl:mt-[26px] mt-[29.55px] 2xl:mt-[29px] 3xl:mt-[35px] mx-[auto] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                          alt="fluentclipboar"
                        />
                        <Text className="font-semibold lg:mt-[19px] xl:mt-[22px] mt-[25.45px] 2xl:mt-[25px] 3xl:mt-[30px] mx-[auto] text-bluegray_900 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left">{`Manage Project`}</Text>
                        <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_500 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[89%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum tellus tellus.`}</Text>
                      </Column>
                      <Column className="bg-white_A700 mt-[1px] rounded-radius10 shadow-bs2 w-[100%]">
                        <Column className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                          <Image
                            src="img_icon.svg"
                            className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] mx-[auto] object-contain w-[15%]"
                            alt="icon"
                          />
                        </Column>
                        <Column className="items-start lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                          <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] text-bluegray_900 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left">{`Software Development`}</Text>
                        </Column>
                        <Column className="items-center lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                          <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 mx-[auto] not-italic text-bluegray_500 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[89%]">{`Lorem ipsum dolor sit amet consectetur adipiscing elit. Non ipsum tellus tellus.`}</Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-start justify-start mt-[1px] rounded-radius10 shadow-bs2 w-[100%]">
                        <Image
                          src="img_icon_1.svg"
                          className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] object-contain w-[15%]"
                          alt="icon"
                        />
                        <Column className="items-start lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                          <Text className="font-semibold lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] lg:mr-[21px] xl:mr-[24px] mr-[27px] 3xl:mr-[32px] text-bluegray_900 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left">{`Customized Invoices`}</Text>
                        </Column>
                        <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_500 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[89%]">{`Lorem ipsum dolor sit amet  consectetur adipiscing elit. Non ipsum tellus tellus.`}</Text>
                      </Column>
                      <Column className="bg-white_A700 items-start justify-start mt-[1px] rounded-radius10 shadow-bs2 w-[100%]">
                        <Column className="items-center lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                          <Image
                            src="img_icon_2.svg"
                            className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] mx-[auto] object-contain w-[14%]"
                            alt="icon"
                          />
                        </Column>
                        <Text className="font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mr-[21px] xl:mr-[24px] mr-[27px] 3xl:mr-[32px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] text-bluegray_900 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left">{`Stratagy & Research`}</Text>
                        <Column className="items-center lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                          <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 mx-[auto] not-italic text-bluegray_500 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[89%]">{`Lorem ipsum dolor sit amet consectetur adipiscing elit. Non ipsum tellus tellus.`}</Text>
                        </Column>
                      </Column>
                    </List>
                  </Column>
                  <Row className="absolute font-montserrat items-start justify-between left-[5%] top-[30%] w-[77%]">
                    <Stack className="lg:h-[433px] xl:h-[495px] h-[556px] 2xl:h-[557px] 3xl:h-[668px] w-[47%]">
                      <Image
                        src="img_unsplash8yg31x.png"
                        className="absolute lg:h-[368px] xl:h-[420px] h-[472px] 2xl:h-[473px] 3xl:h-[567px] left-[0] object-contain rounded-radius8 top-[0] w-[85%]"
                        alt="unsplash8YG31X"
                      />
                      <Column className="absolute bg-teal_400 bottom-[0] items-center justify-center right-[0] rounded-radius5 shadow-bs3 w-[44%]">
                        <Text className="font-bold lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1">{`WATCH VIDEO`}</Text>
                        <Image
                          src="img_icon_3.svg"
                          className="h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] object-contain w-[40%]"
                          alt="icon"
                        />
                      </Column>
                    </Stack>
                    <Column className="font-poppins items-start justify-start xl:mb-[111px] mb-[125px] 3xl:mb-[150px] lg:mb-[97px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[44%]">
                      <Text className="font-medium ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-blue_A400 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Introducing Saaspik`}</Text>
                      <Column className="lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Column className="items-start justify-start w-[100%]">
                          <Text className="font-semibold lg:leading-lh37 xl:leading-lh42 2xl:leading-lh48 leading-lh4800 3xl:leading-lh57 text-bluegray_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left w-[100%]">{`Find a Better Buisness Deal in Few Easy Steps.`}</Text>
                          <Column className="font-inter lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                            <Column className="items-start justify-start w-[100%]">
                              <Text className="font-normal lg:leading-lh24 xl:leading-lh28 2xl:leading-lh32 leading-lh3200 3xl:leading-lh38 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] not-italic text-bluegray_500 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[98%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nibh maecenas etiam et nec netus non. Sagittis nibh pharetra tellus tortor sit adipiscing elementum tortor sed.`}</Text>
                              <List
                                className="gap-[0] min-h-[auto] ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[40px] xl:mt-[46px] mt-[52px] 3xl:mt-[62px] w-[91%]"
                                orientation="vertical"
                              >
                                <Row className="items-start justify-start lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] w-[100%]">
                                  <Image
                                    src="img_warningwavy.svg"
                                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                    alt="WarningWavy"
                                  />
                                  <Text className="font-medium lg:ml-[19px] xl:ml-[21px] ml-[24.57px] 2xl:ml-[24px] 3xl:ml-[29px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Concept Design`}</Text>
                                  <Image
                                    src="img_warningwavy_1.svg"
                                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[112px] lg:ml-[72px] xl:ml-[83px] ml-[93.31px] 2xl:ml-[93px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                    alt="WarningWavy"
                                  />
                                  <Text className="font-medium lg:ml-[19px] xl:ml-[22px] ml-[24.82px] 2xl:ml-[24px] 3xl:ml-[29px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Concept Development`}</Text>
                                </Row>
                                <Row className="items-start justify-start lg:mr-[21px] xl:mr-[24px] mr-[27.03px] 2xl:mr-[27px] 3xl:mr-[32px] lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] w-[95%]">
                                  <Image
                                    src="img_warningwavy_2.svg"
                                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                    alt="WarningWavy"
                                  />
                                  <Text className="font-medium lg:ml-[19px] xl:ml-[21px] ml-[24.57px] 2xl:ml-[24px] 3xl:ml-[29px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Concept Implementation`}</Text>
                                  <Image
                                    src="img_warningwavy_3.svg"
                                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[38px] xl:ml-[43px] ml-[49.27px] 2xl:ml-[49px] 3xl:ml-[59px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                    alt="WarningWavy"
                                  />
                                  <Text className="font-medium lg:ml-[19px] xl:ml-[22px] ml-[24.82px] 2xl:ml-[24px] 3xl:ml-[29px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Testing work`}</Text>
                                </Row>
                              </List>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                  </Row>
                  <Image
                    src="img_ellipse9.png"
                    className="absolute lg:h-[359px] xl:h-[411px] h-[461.11px] 2xl:h-[462px] 3xl:h-[554px] left-[0] object-contain opacity-op7 top-[23%] w-[21%]"
                    alt="Ellipse9"
                  />
                  <Image
                    src="img_ellipse7.png"
                    className="absolute bottom-[38%] lg:h-[381px] xl:h-[435px] h-[488.89px] 2xl:h-[490px] 3xl:h-[588px] object-contain opacity-op7 right-[9%] w-[21%]"
                    alt="Ellipse7"
                  />
                  <Column className="absolute bg-white_A700 bottom-[28%] font-poppins items-start justify-center left-[8%] rounded-radius8 shadow-bs4 w-[36%]">
                    <Column className="items-end lg:mt-[42px] xl:mt-[48px] mt-[55px] 3xl:mt-[66px] w-[100%]">
                      <Stack className="3xl:h-[101px] lg:h-[66px] xl:h-[75px] h-[83.80005px] 2xl:h-[84px] lg:mx-[47px] xl:mx-[54px] mx-[61px] 3xl:mx-[73px] w-[25%]">
                        <Image
                          src="img_union.svg"
                          className="absolute 3xl:h-[101px] lg:h-[66px] xl:h-[75px] h-[83.8px] 2xl:h-[84px] inset-[0] object-cover w-[100%]"
                          alt="Union"
                        />
                        <Column className="absolute inset-x-[0] mx-[auto] top-[14%] w-[80%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Text className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-teal_700">{`3,923`}</Text>
                            <Text className="font-normal xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic opacity-op4 text-bluegray_700 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Orders`}</Text>
                          </Row>
                          <Row className="items-start justify-start lg:mt-[4px] mt-[5.8px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Image
                              src="img_badgeactivit.svg"
                              className="lg:h-[12px] xl:h-[13px] h-[14.4px] 2xl:h-[15px] 3xl:h-[18px] mb-[1.8px] 2xl:mb-[1px] xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] ml-[1px] object-contain lg:w-[11px] xl:w-[12px] w-[14.4px] 2xl:w-[14px] 3xl:w-[17px]"
                              alt="BadgeActivit"
                            />
                            <Text className="font-normal lg:ml-[2px] ml-[3.8px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] mt-[1px] not-italic opacity-op71 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`20%`}</Text>
                          </Row>
                        </Column>
                      </Stack>
                    </Column>
                    <Stack className="lg:h-[116px] xl:h-[132px] h-[148px] 2xl:h-[149px] 3xl:h-[178px] xl:mt-[3px] lg:mt-[3px] mt-[4.2px] 2xl:mt-[4px] 3xl:mt-[5px] lg:mx-[29px] xl:mx-[33px] mx-[38px] 3xl:mx-[45px] w-[82%]">
                      <Image
                        src="img_group.svg"
                        className="absolute lg:h-[116px] xl:h-[132px] h-[148px] 2xl:h-[149px] 3xl:h-[178px] inset-[0] object-cover w-[100%]"
                        alt="Group"
                      />
                      <Image
                        src="img_group_1.svg"
                        className="absolute h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] inset-x-[0] mx-[auto] object-contain top-[3%] w-[96%]"
                        alt="Group"
                      />
                    </Stack>
                    <Column className="items-center lg:mb-[51px] xl:mb-[59px] mb-[66.53px] 2xl:mb-[66px] 3xl:mb-[79px] xl:mt-[5px] lg:mt-[5px] mt-[6.47px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Row className="items-start justify-start mx-[auto] w-[79%]">
                        <Text className="font-medium text-bluegray_900 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9">{`10 Jan`}</Text>
                        <Text className="font-medium lg:ml-[35px] xl:ml-[40px] ml-[45.36px] 2xl:ml-[45px] 3xl:ml-[54px] text-bluegray_900 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9">{`12 Jan`}</Text>
                        <Text className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44.36px] 2xl:ml-[44px] 3xl:ml-[53px] text-bluegray_900 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9">{`14 Jan`}</Text>
                        <Text className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44.36px] 2xl:ml-[44px] 3xl:ml-[53px] text-bluegray_900 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9">{`16 Jan`}</Text>
                        <Text className="font-medium lg:ml-[34px] xl:ml-[39px] ml-[44.36px] 2xl:ml-[44px] 3xl:ml-[53px] text-bluegray_900 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9">{`18 Jan`}</Text>
                        <Text className="font-medium lg:ml-[33px] xl:ml-[38px] ml-[43.36px] 2xl:ml-[43px] 3xl:ml-[52px] text-bluegray_900 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9">{`20 Jan`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Row className="absolute bottom-[0] font-poppins items-start justify-between left-[9%] w-[77%]">
                    <Column className="items-start justify-start lg:mb-[55px] xl:mb-[63px] mb-[71px] 3xl:mb-[85px] mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[97px] w-[34%]">
                      <Column className="w-[100%]">
                        <Column className="items-start justify-start w-[100%]">
                          <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-blue_A400 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Team Management`}</Text>
                          <Text className="font-semibold lg:leading-lh37 xl:leading-lh42 2xl:leading-lh48 leading-lh4800 3xl:leading-lh57 lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] text-bluegray_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left w-[100%]">{`We help build skilled teams for you`}</Text>
                          <Text className="font-normal lg:leading-lh28 xl:leading-lh32 2xl:leading-lh36 leading-lh3600 3xl:leading-lh43 lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] not-italic text-bluegray_500 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[100%]">{`Search all the open positions on the web. Get your own personalized salary estimate.`}</Text>
                        </Column>
                      </Column>
                      <Column className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[94%]">
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[71%]">
                          <Image
                            src="img_group554.svg"
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            alt="Group554"
                          />
                          <Text className="font-semibold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Easily select the staff you need`}</Text>
                        </Row>
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[88%]">
                          <Image
                            src="img_group554.svg"
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            alt="Group554"
                          />
                          <Text className="font-semibold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Many employee can be found together`}</Text>
                        </Row>
                        <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Image
                              src="img_group554.svg"
                              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                              alt="Group555"
                            />
                            <Text className="font-semibold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Improve business quickly with skilled people`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[454px] xl:h-[519px] h-[583px] 2xl:h-[584px] 3xl:h-[701px] w-[51%]">
                      <Column className="absolute bg-bluegray_50 bottom-[1%] items-center justify-start left-[0] opacity-op35 rounded-bl-[50px] rounded-br-[0] rounded-tl-[50px] rounded-tr-[50px] w-[94%]">
                        <Column className="bg-white_A700 items-center justify-center lg:mb-[112px] xl:mb-[128px] mb-[145px] 3xl:mb-[174px] lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] lg:mx-[37px] xl:mx-[42px] mx-[48px] 3xl:mx-[57px] lg:py-[42px] xl:py-[48px] py-[54px] 3xl:py-[64px] rounded-radius8 shadow-bs4 w-[40%]">
                          <Stack className="font-circularstd h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] mx-[auto] w-[47%]">
                            <Image
                              src="img_image.png"
                              className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] left-[0] object-contain rounded-radius50 w-[100px]"
                              alt="image"
                            />
                            <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] rounded-radius50 shadow-bs5 lg:w-[20px] xl:w-[23px] w-[26px] 3xl:w-[31px]">
                              <Text className="font-normal mx-[auto] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-gray_700">{`5`}</Text>
                            </Column>
                          </Stack>
                          <Text className="font-inter font-medium lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_901">{`John Smith`}</Text>
                          <Text className="font-inter font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] mx-[auto] not-italic text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_701">{`Natalie Quinn`}</Text>
                          <Row className="font-poppins items-center justify-center lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]">
                            <Column className="mt-[1px] w-[18%]">
                              <Column className="items-end w-[100%]">
                                <Image
                                  src="img_098controls1.svg"
                                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mx-[10px] mx-[12px] 3xl:mx-[14px] lg:mx-[9px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                                  alt="098Controls1"
                                />
                              </Column>
                              <Text className="font-medium xl:mt-[2px] lg:mt-[2px] mt-[3px] mx-[auto] text-bluegray_901 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16">{`682.1k`}</Text>
                            </Column>
                            <Column className="lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[15%]">
                              <Column className="items-end w-[100%]">
                                <Image
                                  src="img_commenticon.svg"
                                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] 3xl:mx-[10px] lg:mx-[7px] xl:mx-[8px] mx-[9px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                                  alt="commenticon"
                                />
                              </Column>
                              <Text className="font-medium xl:mt-[3px] lg:mt-[3px] mt-[4px] mx-[auto] text-bluegray_901 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16">{`1,862`}</Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Stack className="absolute bg-white_A700 xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] right-[0] rounded-radius8 shadow-bs4 top-[0] w-[47%]">
                        <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[4%] my-[auto] w-[68%]">
                          <Text className="font-semibold xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left text-teal_900">{`Numerous skilled workers ready`}</Text>
                          <Text className="font-normal xl:ml-[2px] lg:ml-[2px] ml-[3px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic text-blue_A400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-right">{`123,094`}</Text>
                          <Column className="font-manrope items-center lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]">
                            <Image
                              src="img_group100000168.svg"
                              className="h-[4.8px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] xl:mr-[2px] lg:mr-[2px] mr-[3px] object-contain w-[98%]"
                              alt="Group100000168"
                            />
                            <Row className="items-center justify-start mt-[11.2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
                              <Row className="lg:gap-[2px] gap-[3.6799812px] 2xl:gap-[3px] xl:gap-[3px] 3xl:gap-[4px] grid grid-cols-3 items-center justify-evenly w-[41%]">
                                <Image
                                  src="img_photo.png"
                                  className="lg:h-[20px] xl:h-[22px] h-[24.55px] 2xl:h-[25px] 3xl:h-[30px] object-contain rounded-radius50 w-[24.55px]"
                                  alt="Photo"
                                />
                                <Image
                                  src="img_photo_1.png"
                                  className="lg:h-[20px] xl:h-[22px] h-[24.55px] 2xl:h-[25px] 3xl:h-[30px] object-contain rounded-radius50 w-[24.55px]"
                                  alt="Photo"
                                />
                                <Image
                                  src="img_photo_2.png"
                                  className="lg:h-[20px] xl:h-[22px] h-[24.55px] 2xl:h-[25px] 3xl:h-[30px] object-contain rounded-radius50 w-[24.55px]"
                                  alt="Photo"
                                />
                              </Row>
                              <Image
                                src="img_color.svg"
                                className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mb-[7.55px] 2xl:mb-[7px] 3xl:mb-[9px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] mt-[7px] 3xl:mt-[8px] lg:my-[5px] xl:my-[6px] object-contain rounded-radius50 w-[10px]"
                                alt="Color"
                              />
                              <Text className="font-bold mb-[2.55px] 2xl:mb-[2px] xl:mb-[2px] 3xl:mb-[3px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[1px] mt-[2px] lg:my-[1px] opacity-op8 text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-left text-teal_900">{`Restless`}</Text>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="absolute bottom-[13%] font-manrope items-center justify-center right-[10%] w-[22%]">
                          <Image
                            src="img_color_1.svg"
                            className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] object-contain rounded-radius50 w-[10px]"
                            alt="Color"
                          />
                          <Text className="font-bold mx-[10px] 3xl:mx-[12px] lg:mx-[7px] xl:mx-[8px] opacity-op8 text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-left text-teal_900">{`Awake`}</Text>
                        </Row>
                      </Stack>
                      <Column className="absolute bg-white_A700 bottom-[20%] items-center justify-center right-[14%] rounded-radius8 shadow-bs6 w-[38%]">
                        <Image
                          src="img_icon_4.svg"
                          className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] mx-[auto] object-contain lg:w-[34px] xl:w-[39px] w-[44px] 3xl:w-[52px]"
                          alt="icon"
                        />
                        <Text className="font-medium font-poppins lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] text-bluegray_901 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43">{`23.8k`}</Text>
                        <Text className="font-inter font-medium lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_701">{`Reach`}</Text>
                        <Row className="font-poppins items-center justify-center lg:mb-[41px] xl:mb-[47px] mb-[53px] 3xl:mb-[63px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] w-[22%]">
                          <Image
                            src="img_vector19.svg"
                            className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                            alt="Vector19"
                          />
                          <Text className="font-medium lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left text-teal_300">{`11.5%`}</Text>
                        </Row>
                      </Column>
                      <Stack className="absolute bottom-[0] lg:h-[100px] xl:h-[114px] h-[128px] 2xl:h-[129px] 3xl:h-[154px] left-[22%] w-[31%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[6%] rounded-radius491 shadow-bs7 w-[67%]">
                          <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.74px] 2xl:mt-[8px] w-[100%]">
                            <Text className="font-normal lg:ml-[17px] xl:ml-[19px] ml-[22.03px] 2xl:ml-[22px] 3xl:ml-[26px] not-italic text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs14649505615234375 3xl:text-fs17 text-gray_500">{`09`}</Text>
                            <Text className="font-normal lg:mr-[19px] xl:mr-[21px] mr-[24.73px] 2xl:mr-[24px] 3xl:mr-[29px] not-italic text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs14649505615234375 3xl:text-fs17 text-gray_500">{`01`}</Text>
                          </Row>
                          <Row className="items-center justify-between mb-[3.91px] 2xl:mb-[3px] xl:mb-[3px] lg:mb-[3px] 3xl:mb-[4px] lg:mt-[55px] xl:mt-[63px] mt-[71.35px] 2xl:mt-[71px] 3xl:mt-[85px] w-[100%]">
                            <Text className="font-normal lg:ml-[17px] xl:ml-[20px] ml-[23.03px] 2xl:ml-[23px] 3xl:ml-[27px] not-italic text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs14649505615234375 3xl:text-fs17 text-gray_501">{`07`}</Text>
                            <Text className="font-normal lg:mr-[17px] xl:mr-[20px] mr-[22.73px] 2xl:mr-[22px] 3xl:mr-[27px] not-italic text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs14649505615234375 3xl:text-fs17 text-gray_501">{`59`}</Text>
                          </Row>
                        </Column>
                        <Row className="absolute bg-teal_400 bottom-[27%] inset-x-[0] items-center justify-center rounded-radius46 shadow-bs7 top-[30%] w-[100%]">
                          <Text className="font-normal font-poppins xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic text-center lg:text-fs15 xl:text-fs17 2xl:text-fs19 text-fs19744985580444336 3xl:text-fs23 text-yellow_50">{`08`}</Text>
                          <Text className="font-einaregular font-normal lg:mb-[11px] xl:mb-[13px] mb-[15.25px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[11px] xl:ml-[13px] ml-[14.85px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic text-center lg:text-fs15 xl:text-fs17 2xl:text-fs19 text-fs19744985580444336 3xl:text-fs23 text-yellow_100">{`:`}</Text>
                          <Text className="font-normal font-poppins xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[11px] xl:ml-[13px] ml-[14.93px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic text-center lg:text-fs15 xl:text-fs17 2xl:text-fs19 text-fs19744985580444336 3xl:text-fs23 text-yellow_50">{`00`}</Text>
                        </Row>
                      </Stack>
                    </Stack>
                  </Row>
                  <Column className="absolute bottom-[18%] justify-start left-[0] w-[16%]">
                    <Image
                      src="img_dots.svg"
                      className="lg:h-[145px] xl:h-[166px] h-[186px] 2xl:h-[187px] 3xl:h-[224px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[78%]"
                      alt="dots"
                    />
                    <div className="backdrop-opacity-[0.15] bg-amber_700 blur-[300.00px] lg:h-[368px] xl:h-[420px] h-[472px] 2xl:h-[473px] 3xl:h-[567px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[59px] xl:mt-[68px] mt-[77px] 3xl:mt-[92px] rounded-radius236 w-[48%]"></div>
                  </Column>
                </Stack>
                <Column className="absolute bottom-[31%] items-start justify-start right-[15%] w-[37%]">
                  <Text className="font-semibold text-bluegray_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left">{`Increase Business Efficiency`}</Text>
                  <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_500 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[84%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet sed sed tellus lacus tellus feugiat. Senectus penatibus in elementum ac imperdiet massa duis elit pulvinar. Lectus egestas phasellus pellentesque turpis.`}</Text>
                  <Button className="bg-teal_700 font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] pb-[16.029999px] 2xl:pb-[16px] pt-[15.97px] 2xl:pt-[15px] lg:py-[12px] xl:py-[14px] 3xl:py-[19px] rounded-radius8 shadow-bs text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_50 w-[24%]">{`Learn More`}</Button>
                </Column>
              </Stack>
              <Row className="items-end justify-start lg:mt-[108px] xl:mt-[124px] mt-[140px] 3xl:mt-[168px] w-[100%]">
                <div className="backdrop-opacity-[0.15] bg-amber_700 blur-[300.00px] lg:h-[368px] xl:h-[420px] h-[472px] 2xl:h-[473px] 3xl:h-[567px] lg:mt-[446px] xl:mt-[511px] mt-[574.55px] 2xl:mt-[574px] 3xl:mt-[689px] rounded-radius236 w-[8%]"></div>
                <Stack className="h-[1036.2002px] 2xl:h-[1037px] 3xl:h-[1245px] lg:h-[806px] xl:h-[922px] mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.8px] 2xl:mt-[8px] w-[83%]">
                  <Stack className="absolute h-[1036.2px] 2xl:h-[1037px] 3xl:h-[1245px] lg:h-[806px] xl:h-[922px] inset-[0] w-[100%]">
                    <div className="absolute backdrop-opacity-[0.15] bg-teal_400 blur-[300.00px] bottom-[23%] lg:h-[324px] xl:h-[371px] h-[416px] 2xl:h-[417px] 3xl:h-[500px] right-[0] rounded-radius208 w-[18%]"></div>
                    <Image
                      src="img_bg.svg"
                      className="absolute bottom-[0] lg:h-[285px] xl:h-[326px] h-[366px] 2xl:h-[367px] 3xl:h-[440px] left-[0] object-contain w-[90%]"
                      alt="BG"
                    />
                    <Text className="absolute font-semibold lg:leading-lh37 xl:leading-lh42 2xl:leading-lh48 leading-lh4800 3xl:leading-lh57 left-[0] text-bluegray_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left top-[9%] w-[34%]">{`Schedule Your Work Whenever You Want`}</Text>
                    <Image
                      src="img_detail3.png"
                      className="absolute lg:h-[56px] xl:h-[64px] h-[71.63px] 2xl:h-[72px] 3xl:h-[87px] object-contain right-[2%] top-[11%] w-[6%]"
                      alt="detail3"
                    />
                    <Row className="absolute items-start justify-between left-[0] top-[0] w-[94%]">
                      <Stack className="lg:h-[183px] xl:h-[210px] h-[235.01px] 2xl:h-[236px] 3xl:h-[283px] lg:mt-[40px] xl:mt-[46px] mt-[51.75px] 2xl:mt-[51px] 3xl:mt-[62px] w-[53%]">
                        <Text className="absolute bottom-[5%] font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 left-[0] not-italic text-bluegray_500 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[74%]">{`Publish your content automatically to ensure that your content reaches the right people. Built-in features such as`}</Text>
                        <Image
                          src="img_detail4.png"
                          className="absolute bottom-[10%] lg:h-[58px] xl:h-[66px] h-[74px] 2xl:h-[75px] 3xl:h-[89px] object-contain right-[10%] w-[12%]"
                          alt="detail4"
                        />
                        <Image
                          src="img_shapes.svg"
                          className="absolute lg:h-[183px] xl:h-[210px] h-[235.01px] 2xl:h-[236px] 3xl:h-[283px] object-contain right-[0] w-[26%]"
                          alt="shapes"
                        />
                      </Stack>
                      <Column className="items-start justify-start lg:mb-[33px] xl:mb-[38px] mb-[43.38px] 2xl:mb-[43px] 3xl:mb-[52px] w-[11%]">
                        <div className="border border-gray_902 border-solid lg:h-[18px] xl:h-[21px] h-[23.03px] 2xl:h-[24px] 3xl:h-[28px] lg:mx-[38px] xl:mx-[44px] mx-[49.52px] 2xl:mx-[49px] 3xl:mx-[59px] rounded-radius50 lg:w-[17px] xl:w-[20px] w-[23.03px] 2xl:w-[23px] 3xl:w-[27px]"></div>
                        <Column className="items-center lg:mt-[29px] xl:mt-[34px] mt-[38.39px] 2xl:mt-[38px] 3xl:mt-[46px] w-[100%]">
                          <Row className="items-start justify-between w-[100%]">
                            <div className="border border-deep_purple_900 border-solid h-[10.24px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:mb-[30px] xl:mb-[34px] mb-[39.18px] 2xl:mb-[39px] 3xl:mb-[47px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.81px] 2xl:mt-[8px] rounded-radius50 w-[10.24px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"></div>
                            <Image
                              src="img_detail.png"
                              className="lg:h-[46px] xl:h-[52px] h-[58.23px] 2xl:h-[59px] 3xl:h-[70px] object-contain w-[47%]"
                              alt="detail"
                            />
                          </Row>
                        </Column>
                        <Column className="items-end lg:mt-[61px] xl:mt-[70px] mt-[79.6px] 2xl:mt-[79px] 3xl:mt-[95px] w-[100%]">
                          <div className="border-2 border-amber_300 border-solid lg:h-[35px] xl:h-[40px] h-[44.13px] 2xl:h-[45px] 3xl:h-[53px] lg:mx-[13px] xl:mx-[15px] mx-[17.16px] 2xl:mx-[17px] 3xl:mx-[20px] rotate-[-3deg] rounded-radius22065 w-[34%]"></div>
                        </Column>
                      </Column>
                    </Row>
                    <div className="absolute border border-deep_purple_900 border-solid lg:h-[12px] xl:h-[14px] h-[15.35px] 2xl:h-[16px] 3xl:h-[19px] right-[18%] rounded-radius50 top-[24%] lg:w-[11px] xl:w-[13px] w-[15.35px] 2xl:w-[15px] 3xl:w-[18px]"></div>
                    <Column className="absolute font-inter items-center justify-start right-[6%] top-[11%] w-[54%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Column className="bg-gray-900 border-2 border-gray-700 border-solid items-center justify-start mx-[auto] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[28px] rounded-tr-[28px] w-[81%]">
                          <Column className="bg-black_900 items-center justify-start lg:mb-[11px] xl:mb-[12px] mb-[14.59px] 2xl:mb-[14px] 3xl:mb-[17px] lg:mt-[2px] mt-[3.47px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[22px] rounded-tr-[22px] w-[99%]">
                            <Stack className="bg-white_A700 lg:h-[247px] xl:h-[283px] h-[317.2798px] 2xl:h-[318px] 3xl:h-[381px] lg:mb-[19px] xl:mb-[22px] mb-[25.17px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[18px] xl:mt-[21px] mt-[24.19px] 2xl:mt-[24px] 3xl:mt-[29px] mx-[auto] rounded-radius10 w-[85%]">
                              <Text className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray-800 w-[max-content]">{`Insert Your Design Here`}</Text>
                              <Column className="absolute bg-white_A700 font-opensans h-[max-content] inset-[0] justify-center m-[auto] rounded-radius12 w-[100%]">
                                <Column className="items-end xl:mt-[11px] mt-[12.39px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                                  <Row className="items-center justify-end lg:mx-[27px] xl:mx-[31px] mx-[35.32px] 2xl:mx-[35px] 3xl:mx-[42px] w-[76%]">
                                    <Text className="font-semibold text-bluegray_600 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`MON`}</Text>
                                    <Text className="font-semibold lg:ml-[48px] xl:ml-[55px] ml-[62.89px] 2xl:ml-[62px] 3xl:ml-[75px] text-bluegray_600 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`TUE`}</Text>
                                    <Text className="font-semibold lg:ml-[50px] xl:ml-[57px] ml-[64.62px] 2xl:ml-[64px] 3xl:ml-[77px] text-bluegray_600 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`WED`}</Text>
                                    <Text className="font-semibold lg:ml-[49px] xl:ml-[56px] ml-[63.76px] 2xl:ml-[63px] 3xl:ml-[76px] text-bluegray_600 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`THU`}</Text>
                                    <Text className="font-semibold lg:ml-[52px] xl:ml-[60px] ml-[68.07px] 2xl:ml-[68px] 3xl:ml-[81px] text-bluegray_600 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`FRI`}</Text>
                                  </Row>
                                </Column>
                                <Column className="items-center lg:mb-[3px] mb-[4.97px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.92px] 2xl:mt-[9px] w-[100%]">
                                  <Stack className="lg:h-[213px] xl:h-[244px] h-[273.48022px] 2xl:h-[274px] 3xl:h-[329px] w-[100%]">
                                    <Row className="absolute inset-y-[0] items-center justify-between left-[2%] right-[1%] w-[97%]">
                                      <Row className="items-center justify-between lg:mb-[4px] mb-[5.78px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] w-[8%]">
                                        <Column className="lg:mb-[23px] xl:mb-[27px] mb-[30.57px] 2xl:mb-[30px] 3xl:mb-[36px] lg:mt-[27px] xl:mt-[31px] mt-[35.53px] 2xl:mt-[35px] 3xl:mt-[42px] w-[63%]">
                                          <Text className="font-normal mx-[auto] not-italic text-bluegray_300 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9">{`1pm`}</Text>
                                          <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 w-[100%]">{`2pm`}</Text>
                                          <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 w-[100%]">{`3pm`}</Text>
                                          <Text className="font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh20 leading-lh2000 3xl:leading-lh24 lg:mb-[11px] xl:mb-[12px] mb-[14.6px] 2xl:mb-[14px] 3xl:mb-[17px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 w-[100%]">{`4pm`}</Text>
                                        </Column>
                                        <Line className="bg-bluegray_51 lg:h-[209px] xl:h-[239px] h-[267.7px] 2xl:h-[268px] 3xl:h-[322px] w-[0.86px]" />
                                      </Row>
                                      <Row className="items-center justify-center w-[37%]">
                                        <Line className="bg-bluegray_51 lg:h-[209px] xl:h-[239px] h-[267.7px] 2xl:h-[268px] 3xl:h-[322px] lg:mb-[4px] mb-[5.78px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] w-[0.86px]" />
                                        <Stack className="lg:h-[213px] xl:h-[244px] h-[273.48022px] 2xl:h-[274px] 3xl:h-[329px] w-[50%]">
                                          <Stack className="absolute lg:h-[213px] xl:h-[244px] h-[273.48px] 2xl:h-[274px] 3xl:h-[329px] inset-[0] justify-center m-[auto] w-[100%]">
                                            <div className="absolute bg-gray_51 bottom-[0] lg:h-[212px] xl:h-[242px] h-[271.83px] 2xl:h-[273px] 3xl:h-[327px] inset-x-[0] top-[1%] w-[100%]"></div>
                                            <Line className="absolute bg-bluegray_51 lg:h-[209px] xl:h-[239px] h-[267.7px] 2xl:h-[268px] 3xl:h-[322px] inset-y-[0] my-[auto] right-[0] w-[0.86px]" />
                                          </Stack>
                                          <Row className="absolute xl:gap-[3px] lg:gap-[3px] gap-[4.2999916px] 2xl:gap-[4px] 3xl:gap-[5px] grid grid-cols-2 inset-x-[0] items-center justify-evenly mx-[auto] top-[18%] w-[89%]">
                                            <Image
                                              src="img_shape_1.png"
                                              className="lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] object-contain rounded-radius4 w-[100%]"
                                              alt="Shape"
                                            />
                                            <Image
                                              src="img_shape_2.png"
                                              className="lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] object-contain rounded-radius4 w-[100%]"
                                              alt="Shape"
                                            />
                                          </Row>
                                        </Stack>
                                        <Row className="items-start justify-evenly lg:mb-[4px] mb-[5.78px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] ml-[1px] w-[49%]">
                                          <Stack className="lg:h-[32px] xl:h-[37px] h-[40.49px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[33px] xl:mb-[38px] mb-[42.96px] 2xl:mb-[42px] 3xl:mb-[51px] lg:mt-[143px] xl:mt-[163px] mt-[184.25px] 2xl:mt-[184px] 3xl:mt-[221px] w-[95%]">
                                            <Image
                                              src="img_shape_3.png"
                                              className="absolute bottom-[0] lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] inset-x-[0] mx-[auto] object-contain rounded-radius4 w-[97%]"
                                              alt="Shape"
                                            />
                                            <Image
                                              src="img_shape_4.svg"
                                              className="absolute 2xl:h-[10px] 3xl:h-[12px] lg:h-[8px] h-[9.91px] xl:h-[9px] left-[0] object-contain top-[0] w-[13%]"
                                              alt="Shape"
                                            />
                                          </Stack>
                                          <Line className="bg-bluegray_51 lg:h-[209px] xl:h-[239px] h-[267.7px] 2xl:h-[268px] 3xl:h-[322px] w-[0.86px]" />
                                        </Row>
                                      </Row>
                                      <Row className="items-start justify-evenly lg:mb-[4px] mb-[5.78px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] w-[18%]">
                                        <Line className="bg-bluegray_51 lg:h-[209px] xl:h-[239px] h-[267.7px] 2xl:h-[268px] 3xl:h-[322px] w-[0.86px]" />
                                        <Image
                                          src="img_starred.svg"
                                          className="lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] lg:mb-[33px] xl:mb-[38px] mb-[42.96px] 2xl:mb-[42px] 3xl:mb-[51px] lg:mt-[145px] xl:mt-[166px] mt-[186.73px] 2xl:mt-[186px] 3xl:mt-[224px] object-contain w-[95%]"
                                          alt="Starred"
                                        />
                                      </Row>
                                    </Row>
                                    <Stack className="absolute lg:h-[32px] xl:h-[37px] h-[40.49px] 2xl:h-[41px] 3xl:h-[49px] right-[1%] top-[34%] w-[89%]">
                                      <Image
                                        src="img_shape_5.png"
                                        className="absolute bottom-[0] lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] inset-x-[0] mx-[auto] object-contain rounded-radius4 w-[18%]"
                                        alt="Shape"
                                      />
                                      <Image
                                        src="img_line.svg"
                                        className="absolute 2xl:h-[10px] 3xl:h-[11px] lg:h-[8px] h-[9.09px] xl:h-[9px] object-cover top-[0] w-[100%]"
                                        alt="Line"
                                      />
                                      <Image
                                        src="img_shape_6.png"
                                        className="absolute bottom-[0] lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] object-contain right-[0] rounded-radius4 w-[18%]"
                                        alt="Shape"
                                      />
                                    </Stack>
                                    <Image
                                      src="img_shape_7.png"
                                      className="absolute bottom-[35%] lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] left-[10%] object-contain rounded-radius4 w-[16%]"
                                      alt="Shape"
                                    />
                                    <Column className="absolute bottom-[18%] items-center justify-start left-[29%] w-[16%]">
                                      <Stack className="lg:h-[22px] xl:h-[25px] h-[27.27px] 2xl:h-[28px] 3xl:h-[33px] ml-[8.61px] mr-[8.63px] 3xl:mx-[10px] lg:mx-[6px] xl:mx-[7px] 2xl:mx-[8px] w-[78%]">
                                        <Image
                                          src="img_combinedshape.svg"
                                          className="absolute lg:h-[22px] xl:h-[25px] h-[27.27px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] object-cover w-[100%]"
                                          alt="CombinedShape"
                                        />
                                        <Text className="absolute bottom-[0] font-semibold inset-x-[0] leading-lh mx-[auto] text-center xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-white_A700 w-[56%]">{`Stories`}</Text>
                                      </Stack>
                                      <Image
                                        src="img_shape_8.png"
                                        className="lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] lg:mt-[1px] mt-[2.47px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] object-cover rounded-radius4 w-[100%]"
                                        alt="Shape"
                                      />
                                    </Column>
                                    <Image
                                      src="img_shape_9.png"
                                      className="absolute lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] object-contain right-[19%] rounded-radius4 top-[18%] w-[16%]"
                                      alt="Shape"
                                    />
                                    <Column className="absolute bottom-[1%] items-center justify-start right-[19%] w-[16%]">
                                      <Image
                                        src="img_shape_10.png"
                                        className="lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] object-contain rounded-radius4 w-[100%]"
                                        alt="Shape"
                                      />
                                      <Image
                                        src="img_add.svg"
                                        className="lg:h-[30px] xl:h-[34px] h-[38.01px] 2xl:h-[39px] 3xl:h-[46px] lg:mt-[41px] xl:mt-[47px] mt-[53.71px] 2xl:mt-[53px] 3xl:mt-[64px] object-contain w-[100%]"
                                        alt="Add"
                                      />
                                    </Column>
                                    <Line className="absolute bg-bluegray_51 h-[0.83px] inset-x-[0] top-[0] w-[100%]" />
                                    <Line className="absolute bg-bluegray_51 h-[0.83px] right-[0] top-[16%] w-[90%]" />
                                    <Line className="absolute bg-bluegray_51 h-[0.83px] right-[0] top-[33%] w-[90%]" />
                                    <Line className="absolute bg-bluegray_51 h-[0.83px] inset-y-[0] my-[auto] right-[0] w-[90%]" />
                                    <Line className="absolute bg-bluegray_51 bottom-[33%] h-[0.83px] right-[0] w-[90%]" />
                                    <Line className="absolute bg-bluegray_51 bottom-[16%] h-[0.83px] right-[0] w-[90%]" />
                                  </Stack>
                                </Column>
                              </Column>
                            </Stack>
                          </Column>
                        </Column>
                        <Image
                          src="img_bottom.png"
                          className="lg:h-[17px] xl:h-[19px] h-[20.83px] 2xl:h-[21px] 3xl:h-[26px] object-cover w-[100%]"
                          alt="Bottom"
                        />
                      </Column>
                      <div className="backdrop-opacity-[0.5] bg-black_900 blur-[44.00px] h-[6.94px] lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] mt-[1px] mx-[auto] rounded-radius347 w-[90%]"></div>
                    </Column>
                    <Column className="absolute font-poppins items-start justify-start left-[0] top-[30%] w-[13%]">
                      <Column className="w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <Image
                            src="img_feathercheckc.svg"
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                            alt="feathercheckc"
                          />
                          <Text className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Best Time to Post`}</Text>
                        </Row>
                      </Column>
                      <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[77%]">
                        <Image
                          src="img_feathercheckc_1.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="feathercheckc"
                        />
                        <Text className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Geolocation`}</Text>
                      </Row>
                      <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[60%]">
                        <Image
                          src="img_feathercheckc_2.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="feathercheckc"
                        />
                        <Text className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`User Tag`}</Text>
                      </Row>
                      <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[86%]">
                        <Image
                          src="img_feathercheckc_3.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="feathercheckc"
                        />
                        <Text className="font-medium xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Others benefit`}</Text>
                      </Row>
                      <Button className="bg-teal_700 font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[22px] xl:mt-[26px] mt-[29.45px] 2xl:mt-[29px] 3xl:mt-[35px] pb-[16.029999px] 2xl:pb-[16px] pt-[15.97px] 2xl:pt-[15px] lg:py-[12px] xl:py-[14px] 3xl:py-[19px] rounded-radius8 shadow-bs text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_50 w-[84%]">{`Learn More`}</Button>
                    </Column>
                  </Stack>
                  <Row className="absolute bottom-[6%] items-center justify-between left-[6%] w-[74%]">
                    <Column className="items-start w-[37%]">
                      <Text className="font-semibold lg:leading-lh37 xl:leading-lh42 2xl:leading-lh48 leading-lh4800 3xl:leading-lh57 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left text-white_A700 w-[100%]">
                        {
                          <>
                            {`Grow your brand `}
                            <br />
                            {``}
                            <br />
                            {`presence on social media`}
                          </>
                        }
                      </Text>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Join with more 1200+ happy customers`}</Text>
                      <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[64%]">
                        <Stack className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] w-[60%]">
                          <Image
                            src="img_item.png"
                            className="absolute lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] left-[0] object-contain rounded-radius50 w-[37px]"
                            alt="Item"
                          />
                          <Image
                            src="img_item_1.png"
                            className="absolute lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] left-[18%] object-contain rounded-radius50 w-[37px]"
                            alt="Item"
                          />
                          <Image
                            src="img_item_2.png"
                            className="absolute lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] inset-y-[0] left-[37%] object-contain right-[36%] w-[27%]"
                            alt="Item"
                          />
                          <Image
                            src="img_item_3.png"
                            className="absolute lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] object-contain right-[18%] w-[27%]"
                            alt="Item"
                          />
                          <Image
                            src="img_item_4.png"
                            className="absolute lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] object-contain right-[0] w-[27%]"
                            alt="Item"
                          />
                        </Stack>
                        <Text className="font-medium lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[10px] xl:ml-[12px] ml-[14.03px] 2xl:ml-[14px] 3xl:ml-[16px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700">{`and others`}</Text>
                      </Row>
                    </Column>
                    <Button className="bg-white_A700 font-semibold 3xl:mb-[103px] lg:mb-[66px] xl:mb-[76px] mb-[86px] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] mt-[87px] lg:py-[16px] xl:py-[18px] py-[21px] 3xl:py-[25px] rounded-radius8 text-bluegray_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[21%]">{`Get your trial now`}</Button>
                  </Row>
                </Stack>
              </Row>
            </Column>
            <Stack className="3xl:h-[1104px] lg:h-[715px] xl:h-[818px] h-[919px] 2xl:h-[920px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[107px] xl:mt-[123px] mt-[138.45px] 2xl:mt-[138px] 3xl:mt-[166px] w-[91%]">
              <Stack className="absolute 3xl:h-[1104px] lg:h-[715px] xl:h-[818px] h-[919px] 2xl:h-[920px] inset-[0] w-[100%]">
                <div className="absolute bg-blue_50 3xl:h-[1084px] lg:h-[702px] xl:h-[803px] h-[902px] 2xl:h-[903px] inset-x-[0] inset-y-[1%] opacity-op3 w-[100%]"></div>
                <Image
                  src="img_shape_11.svg"
                  className="absolute 3xl:h-[1104px] lg:h-[715px] xl:h-[818px] h-[919px] 2xl:h-[920px] inset-[0] object-cover w-[100%]"
                  alt="shape"
                />
              </Stack>
              <Stack className="absolute lg:h-[607px] xl:h-[694px] h-[779.57px] 2xl:h-[781px] 3xl:h-[937px] inset-[0] justify-center m-[auto] w-[85%]">
                <Column className="absolute items-center justify-start left-[4%] top-[0] w-[88%]">
                  <Column className="mx-[auto] w-[35%]">
                    <Column className="items-end w-[100%]">
                      <Text className="font-medium xl:mx-[102px] mx-[115.14px] 2xl:mx-[115px] 3xl:mx-[138px] lg:mx-[89px] text-blue_A400 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19">{`Pricing & Plans`}</Text>
                    </Column>
                    <Column className="xl:mt-[10px] mt-[11.92px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                      <Stack className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] w-[100%]">
                        <Image
                          src="img_rectangle232.svg"
                          className="absolute bottom-[28%] lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] object-contain right-[1%] rounded-radius08 w-[51%]"
                          alt="Rectangle232"
                        />
                        <Text className="absolute font-semibold inset-[0] lg:leading-lh37 xl:leading-lh42 2xl:leading-lh48 leading-lh4800 3xl:leading-lh57 text-bluegray_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 w-[100%]">{`Our pricing plans suits your every need`}</Text>
                      </Stack>
                    </Column>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20.08px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Column className="bg-white_A700 items-start 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] rounded-radius801 shadow-bs8 w-[31%]">
                      <Column className="items-start justify-start lg:mt-[24px] xl:mt-[28px] mt-[31.95px] 2xl:mt-[31px] 3xl:mt-[38px] lg:mx-[24px] xl:mx-[28px] mx-[31.72px] 2xl:mx-[31px] 3xl:mx-[38px] w-[41%]">
                        <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] opacity-op8 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-teal_400">{`Starter`}</Text>
                        <Text className="font-semibold lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] text-bluegray_900 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left">{`$5.00`}</Text>
                        <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] opacity-op71 text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Per Month`}</Text>
                      </Column>
                      <Column className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Line className="bg-blue_600 h-[0.56px] mx-[auto] opacity-op25 w-[81%]" />
                      </Column>
                      <Column className="items-start justify-start lg:mt-[18px] xl:mt-[20px] mt-[23.44px] 2xl:mt-[23px] 3xl:mt-[28px] lg:mx-[24px] xl:mx-[28px] mx-[31.72px] 2xl:mx-[31px] 3xl:mx-[38px] w-[58%]">
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[81%]">
                          <Image
                            src="img_group554_1.svg"
                            className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="Group554"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`10 GB Disk Space`}</Text>
                        </Row>
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[71%]">
                          <Image
                            src="img_group554_1.svg"
                            className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="Group554"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`1 Year Support`}</Text>
                        </Row>
                        <Column className="xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Image
                              src="img_group554_1.svg"
                              className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                              alt="Group554"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Free Custom Domain`}</Text>
                          </Row>
                        </Column>
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[90%]">
                          <Image
                            src="img_group555.svg"
                            className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain opacity-op9 lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="Group555"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Order Notifications`}</Text>
                        </Row>
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[79%]">
                          <Image
                            src="img_group555.svg"
                            className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain opacity-op9 lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="Group555"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic opacity-op9 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Free Installment`}</Text>
                        </Row>
                      </Column>
                      <Column className="items-center lg:mb-[24px] xl:mb-[27px] mb-[31.05px] 2xl:mb-[31px] 3xl:mb-[37px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                        <Button className="border border-solid border-teal_400 font-semibold mx-[auto] lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius8 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-teal_400 w-[72%]">{`Buy Now`}</Button>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-start rounded-radius801 shadow-bs9 w-[31%]">
                      <Column className="items-center lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] w-[100%]">
                        <Column className="items-start justify-start w-[100%]">
                          <Text className="font-medium lg:mx-[24px] xl:mx-[28px] mx-[32px] 3xl:mx-[38px] opacity-op8 text-amber_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Standard`}</Text>
                          <Text className="font-semibold lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:mx-[24px] xl:mx-[28px] mx-[32px] 3xl:mx-[38px] text-bluegray_900 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left">{`$ 45.00`}</Text>
                          <Text className="font-medium xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:mx-[24px] xl:mx-[28px] mx-[31.99px] 2xl:mx-[32px] 3xl:mx-[38px] opacity-op71 text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Per Month`}</Text>
                        </Column>
                        <Line className="bg-blue_600 h-[0.56px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] mx-[auto] opacity-op25 w-[81%]" />
                      </Column>
                      <Row className="items-center justify-start lg:mt-[18px] xl:mt-[20px] mt-[23.44px] 2xl:mt-[23px] 3xl:mt-[28px] lg:mx-[24px] xl:mx-[28px] mx-[31.99px] 2xl:mx-[32px] 3xl:mx-[38px] w-[52%]">
                        <Image
                          src="img_group554_2.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                          alt="Group554"
                        />
                        <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`500 GB Disk Space`}</Text>
                      </Row>
                      <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:mx-[24px] xl:mx-[28px] mx-[31.99px] 2xl:mx-[32px] 3xl:mx-[38px] w-[43%]">
                        <Image
                          src="img_group554_2.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                          alt="Group554"
                        />
                        <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`5 Year Support`}</Text>
                      </Row>
                      <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:mx-[24px] xl:mx-[28px] mx-[31.99px] 2xl:mx-[32px] 3xl:mx-[38px] w-[43%]">
                        <Image
                          src="img_group554_2.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                          alt="Group554"
                        />
                        <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Basic Statistics`}</Text>
                      </Row>
                      <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:mx-[24px] xl:mx-[28px] mx-[31.72px] 2xl:mx-[31px] 3xl:mx-[38px] w-[52%]">
                        <Image
                          src="img_group556.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain opacity-op9 lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                          alt="Group556"
                        />
                        <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.28px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Order Notifications`}</Text>
                      </Row>
                      <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:mx-[24px] xl:mx-[28px] mx-[31.72px] 2xl:mx-[31px] 3xl:mx-[38px] w-[46%]">
                        <Image
                          src="img_group556.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain opacity-op9 lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                          alt="Group556"
                        />
                        <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.28px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Free Installment`}</Text>
                      </Row>
                      <Column className="items-center lg:mb-[29px] xl:mb-[33px] mb-[38px] 3xl:mb-[45px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[100%]">
                        <Button className="bg-teal_700 font-semibold mx-[auto] lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius8 shadow-bs text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-white_A700 w-[72%]">{`Buy Now`}</Button>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-start 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] rounded-radius801 shadow-bs8 w-[31%]">
                      <Column className="items-start justify-start lg:mt-[24px] xl:mt-[28px] mt-[31.95px] 2xl:mt-[31px] 3xl:mt-[38px] lg:mx-[25px] xl:mx-[28px] mx-[32.27px] 2xl:mx-[32px] 3xl:mx-[38px] w-[62%]">
                        <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] opacity-op8 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-pink_A100">{`Premium`}</Text>
                        <Text className="font-semibold lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] text-bluegray_900 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left">{`$ 230.00`}</Text>
                        <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] opacity-op71 text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Per Month`}</Text>
                      </Column>
                      <Column className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Line className="bg-blue_600 h-[0.56px] mx-[auto] opacity-op25 w-[81%]" />
                      </Column>
                      <Column className="items-start justify-start lg:mt-[18px] xl:mt-[20px] mt-[23.44px] 2xl:mt-[23px] 3xl:mt-[28px] lg:mx-[25px] xl:mx-[28px] mx-[32.27px] 2xl:mx-[32px] 3xl:mx-[38px] w-[52%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-start xl:mr-[1px] lg:mr-[1px] mr-[2px] w-[99%]">
                            <Image
                              src="img_group554_2.svg"
                              className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                              alt="Group554"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`800 GB Disk Space`}</Text>
                          </Row>
                          <Row className="items-center justify-start lg:mr-[4px] xl:mr-[5px] mr-[6px] 3xl:mr-[7px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[97%]">
                            <Image
                              src="img_group554_2.svg"
                              className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                              alt="Group554"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Unlimited Support`}</Text>
                          </Row>
                        </Column>
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[73%]">
                          <Image
                            src="img_group554_2.svg"
                            className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="Group554"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Full Statistics`}</Text>
                        </Row>
                        <Column className="xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Image
                              src="img_group554_2.svg"
                              className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                              alt="Group554"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Order Notifications`}</Text>
                          </Row>
                        </Column>
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[87%]">
                          <Image
                            src="img_group554_2.svg"
                            className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[6.99px] 2xl:mb-[6px] mt-[7px] lg:my-[5px] xl:my-[6px] 3xl:my-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="Group554"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8.01px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Free Installment`}</Text>
                        </Row>
                      </Column>
                      <Column className="items-center lg:mb-[24px] xl:mb-[27px] mb-[31.05px] 2xl:mb-[31px] 3xl:mb-[37px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                        <Button className="border border-solid border-teal_400 font-semibold mx-[auto] lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius8 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-teal_400 w-[72%]">{`Buy Now`}</Button>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Image
                  src="img_shape_12.svg"
                  className="absolute bottom-[0] lg:h-[568px] xl:h-[650px] h-[729.86px] 2xl:h-[731px] 3xl:h-[877px] object-cover w-[100%]"
                  alt="shape"
                />
              </Stack>
            </Stack>
            <Stack className="3xl:h-[1057px] lg:h-[685px] xl:h-[783px] h-[880px] 2xl:h-[881px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[16px] xl:mt-[19px] mt-[21.55px] 2xl:mt-[21px] 3xl:mt-[25px] w-[91%]">
              <Image
                src="img_group100000168_1.png"
                className="absolute bottom-[0] lg:h-[273px] xl:h-[312px] h-[350px] 2xl:h-[351px] 3xl:h-[421px] object-contain right-[0] w-[10%]"
                alt="Group100000168"
              />
              <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[81%]">
                <Column className="items-center justify-start mx-[auto] w-[59%]">
                  <Text className="font-medium mx-[auto] text-blue_A400 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19">{`Testimonials`}</Text>
                  <Text className="font-semibold lg:leading-lh37 xl:leading-lh42 2xl:leading-lh48 leading-lh4800 3xl:leading-lh57 mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] text-bluegray_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 w-[88%]">
                    {
                      <>
                        {`What our trusted`}
                        <br />
                        {`client say`}
                      </>
                    }
                  </Text>
                  <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic text-bluegray_500 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Community development is often linked with community work or community planning, and may involve stakeholders, foundations,`}</Text>
                </Column>
                <List
                  className="lg:gap-[22px] xl:gap-[25px] gap-[28.529999px] 2xl:gap-[28px] 3xl:gap-[34px] grid grid-cols-3 min-h-[auto] lg:mt-[46px] xl:mt-[53px] mt-[60.24px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]"
                  orientation="horizontal"
                >
                  <Stack className="lg:h-[227px] xl:h-[259px] h-[291.06982px] 2xl:h-[292px] 3xl:h-[350px] w-[100%]">
                    <Stack className="absolute lg:h-[227px] xl:h-[259px] h-[291.07px] 2xl:h-[292px] 3xl:h-[350px] inset-[0] w-[100%]">
                      <Column className="absolute bg-white_A700 bottom-[0] items-start justify-end rounded-radius761 shadow-bs10 w-[100%]">
                        <Column className="items-start lg:mt-[36px] xl:mt-[41px] mt-[46.61px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]">
                          <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mx-[17px] xl:mx-[20px] mx-[22.83px] 2xl:mx-[22px] 3xl:mx-[27px] not-italic text-bluegray_500 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[88%]">{`“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nullam adipiscing ornare pellentesque.”`}</Text>
                        </Column>
                        <Row className="items-center justify-between lg:mb-[15px] xl:mb-[18px] mb-[20.42px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mt-[29px] xl:mt-[34px] mt-[38.42px] 2xl:mt-[38px] 3xl:mt-[46px] w-[100%]">
                          <Column className="items-start lg:ml-[17px] xl:ml-[20px] ml-[22.83px] 2xl:ml-[22px] 3xl:ml-[27px] w-[40%]">
                            <Text className="font-semibold text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Leslie Alexander`}</Text>
                            <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[1px] not-italic text-bluegray_500 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`HR Executive`}</Text>
                          </Column>
                          <Row className="items-start justify-center lg:mb-[12px] xl:mb-[14px] mb-[16.68px] 2xl:mb-[16px] 3xl:mb-[20px] lg:mr-[17px] xl:mr-[20px] mr-[22.83px] 2xl:mr-[22px] 3xl:mr-[27px] lg:mt-[19px] xl:mt-[22px] mt-[25.68px] 2xl:mt-[25px] 3xl:mt-[30px] w-[33%]">
                            <Text className="font-medium mb-[1px] text-bluegray_500 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`5.0`}</Text>
                            <RatingBar
                              className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.58px] 2xl:ml-[8px] mr-[1px] mt-[1px]"
                              selectedStarCount={5}
                              starCount={5}
                              color="var(--undefined)"
                              activeColor="var(--orange_A200)"
                              size={
                                ((window.innerWidth - 15) * 15.220215) / 1440
                              }
                            ></RatingBar>
                          </Row>
                        </Row>
                      </Column>
                      <Image
                        src="img_ellipse70.png"
                        className="absolute lg:h-[48px] xl:h-[55px] h-[60.88px] 2xl:h-[61px] 3xl:h-[74px] left-[6%] object-contain rounded-radius50 top-[0] w-[60.88px]"
                        alt="Ellipse70"
                      />
                    </Stack>
                    <Line className="absolute bg-gray_100 bottom-[35%] h-[0.95px] inset-x-[0] mx-[auto] w-[88%]" />
                  </Stack>
                  <Stack className="lg:h-[227px] xl:h-[259px] h-[291.06982px] 2xl:h-[292px] 3xl:h-[350px] w-[100%]">
                    <Stack className="absolute lg:h-[227px] xl:h-[259px] h-[291.07px] 2xl:h-[292px] 3xl:h-[350px] inset-[0] justify-center m-[auto] w-[100%]">
                      <Column className="absolute bg-white_A700 bottom-[0] items-start justify-end rounded-radius761 shadow-bs11 w-[100%]">
                        <Column className="items-start lg:mt-[34px] xl:mt-[39px] mt-[44.71px] 2xl:mt-[44px] 3xl:mt-[53px] w-[100%]">
                          <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mx-[17px] xl:mx-[20px] mx-[22.83px] 2xl:mx-[22px] 3xl:mx-[27px] not-italic text-bluegray_500 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[88%]">{`“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nullam adipiscing ornare pellentesque.”`}</Text>
                        </Column>
                        <Row className="items-center justify-between lg:mb-[15px] xl:mb-[18px] mb-[20.42px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mt-[30px] xl:mt-[35px] mt-[39.51px] 2xl:mt-[39px] 3xl:mt-[47px] w-[100%]">
                          <Column className="items-start lg:ml-[17px] xl:ml-[20px] ml-[22.49px] 2xl:ml-[22px] 3xl:ml-[27px] w-[32%]">
                            <Text className="font-semibold text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Guy Hawkins`}</Text>
                            <Text className="font-normal ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[1px] not-italic text-bluegray_500 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Teacher`}</Text>
                          </Column>
                          <Row className="items-start justify-center lg:mb-[12px] xl:mb-[14px] mb-[16.68px] 2xl:mb-[16px] 3xl:mb-[20px] lg:mr-[17px] xl:mr-[20px] mr-[22.83px] 2xl:mr-[22px] 3xl:mr-[27px] lg:mt-[20px] xl:mt-[23px] mt-[26.49px] 2xl:mt-[26px] 3xl:mt-[31px] w-[33%]">
                            <Text className="font-medium mb-[1px] text-bluegray_500 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`5.0`}</Text>
                            <RatingBar
                              className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.59px] 2xl:ml-[8px] mr-[0] mt-[1px]"
                              selectedStarCount={5}
                              starCount={5}
                              color="var(--undefined)"
                              activeColor="var(--orange_A200)"
                              size={
                                ((window.innerWidth - 15) * 15.220215) / 1440
                              }
                            ></RatingBar>
                          </Row>
                        </Row>
                      </Column>
                      <Image
                        src="img_ellipse70_1.png"
                        className="absolute lg:h-[48px] xl:h-[55px] h-[60.88px] 2xl:h-[61px] 3xl:h-[74px] left-[6%] object-contain rounded-radius50 top-[0] w-[60.88px]"
                        alt="Ellipse70"
                      />
                    </Stack>
                    <Line className="absolute bg-gray_100 bottom-[35%] h-[0.95px] inset-x-[0] mx-[auto] w-[88%]" />
                  </Stack>
                  <Stack className="lg:h-[227px] xl:h-[259px] h-[291.06982px] 2xl:h-[292px] 3xl:h-[350px] w-[100%]">
                    <Stack className="absolute lg:h-[227px] xl:h-[259px] h-[291.07px] 2xl:h-[292px] 3xl:h-[350px] inset-[0] justify-center m-[auto] w-[100%]">
                      <Column className="absolute bg-white_A700 bottom-[0] items-start justify-end rounded-radius761 shadow-bs10 w-[100%]">
                        <Column className="items-start lg:mt-[34px] xl:mt-[39px] mt-[44.71px] 2xl:mt-[44px] 3xl:mt-[53px] w-[100%]">
                          <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mx-[17px] xl:mx-[20px] mx-[22.83px] 2xl:mx-[22px] 3xl:mx-[27px] not-italic text-bluegray_500 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[88%]">{`“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nullam adipiscing ornare pellentesque.”`}</Text>
                        </Column>
                        <Row className="items-center justify-between lg:mb-[15px] xl:mb-[18px] mb-[20.42px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mt-[31px] xl:mt-[35px] mt-[40.32px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                          <Column className="items-start lg:ml-[17px] xl:ml-[20px] ml-[22.83px] 2xl:ml-[22px] 3xl:ml-[27px] w-[36%]">
                            <Text className="font-semibold text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left">{`Kristin Watson`}</Text>
                            <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[1px] not-italic text-bluegray_500 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Senior Officer`}</Text>
                          </Column>
                          <Row className="items-start justify-center lg:mb-[12px] xl:mb-[14px] mb-[16.68px] 2xl:mb-[16px] 3xl:mb-[20px] lg:mr-[17px] xl:mr-[20px] mr-[22.83px] 2xl:mr-[22px] 3xl:mr-[27px] lg:mt-[19px] xl:mt-[22px] mt-[25.68px] 2xl:mt-[25px] 3xl:mt-[30px] w-[33%]">
                            <Text className="font-medium mb-[1px] text-bluegray_500 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`5.0`}</Text>
                            <RatingBar
                              className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.59px] 2xl:ml-[8px] mt-[1px]"
                              selectedStarCount={5}
                              starCount={5}
                              color="var(--undefined)"
                              activeColor="var(--orange_A200)"
                              size={
                                ((window.innerWidth - 15) * 15.220215) / 1440
                              }
                            ></RatingBar>
                          </Row>
                        </Row>
                      </Column>
                      <Image
                        src="img_ellipse70_2.png"
                        className="absolute lg:h-[48px] xl:h-[55px] h-[60.88px] 2xl:h-[61px] 3xl:h-[74px] left-[6%] object-contain rounded-radius50 top-[0] w-[60.88px]"
                        alt="Ellipse70"
                      />
                    </Stack>
                    <Line className="absolute bg-gray_100 bottom-[35%] h-[0.95px] inset-x-[0] mx-[auto] w-[88%]" />
                  </Stack>
                </List>
                <Image
                  src="img_group3431.svg"
                  className="lg:h-[51px] xl:h-[58px] h-[65px] 2xl:h-[66px] 3xl:h-[79px] lg:mt-[58px] xl:mt-[66px] mt-[74.69px] 2xl:mt-[74px] 3xl:mt-[89px] mx-[auto] object-contain w-[11%]"
                  alt="Group3431"
                />
              </Column>
              <Image
                src="img_group100000168_2.png"
                className="absolute lg:h-[425px] xl:h-[486px] h-[546px] 2xl:h-[547px] 3xl:h-[656px] left-[0] object-contain top-[0] w-[12%]"
                alt="Group100000168"
              />
            </Stack>
            <Stack className="lg:h-[319px] xl:h-[365px] h-[410px] 2xl:h-[411px] 3xl:h-[493px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:mx-[105px] xl:mx-[120px] mx-[136px] 3xl:mx-[163px] w-[74%]">
              <div className="absolute bg-bluegray_50 bottom-[0] lg:h-[250px] xl:h-[286px] h-[321px] 2xl:h-[322px] 3xl:h-[386px] opacity-op65 rounded-radius30 w-[100%]"></div>
              <Row className="absolute inset-x-[6%] inset-y-[0] items-start justify-between w-[87%]">
                <Column className="items-start justify-start lg:mb-[61px] xl:mb-[70px] mb-[79px] 3xl:mb-[94px] lg:mt-[133px] xl:mt-[153px] mt-[172px] 3xl:mt-[206px] w-[43%]">
                  <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left">{`Get started for free`}</Text>
                  <Column className="w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal lg:leading-lh21 xl:leading-lh24 2xl:leading-lh28 leading-lh2800 3xl:leading-lh33 not-italic text-bluegray_500 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left w-[100%]">{`Turn your buisness ideas into incredible reality`}</Text>
                      <Button className="bg-teal_400 font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius4 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 w-[42%]">{`Start 30 day trial`}</Button>
                    </Column>
                  </Column>
                </Column>
                <Image
                  src="img_youngbusiness.png"
                  className="lg:h-[319px] xl:h-[365px] h-[410px] 2xl:h-[411px] 3xl:h-[493px] object-contain w-[36%]"
                  alt="youngbusiness"
                />
              </Row>
            </Stack>
            <footer className="mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[107px] mt-[120.45px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[91%]">
              <Column className="bg-teal_700 items-center justify-end w-[100%]">
                <Row className="font-manrope items-start justify-start lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] mx-[auto] w-[81%]">
                  <Column className="items-start justify-start w-[23%]">
                    <Stack className="lg:h-[31px] xl:h-[35px] h-[38.62px] 2xl:h-[39px] 3xl:h-[47px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[59%]">
                      <div className="absolute bg-white_A700 lg:h-[31px] xl:h-[35px] h-[38.62px] 2xl:h-[39px] 3xl:h-[47px] left-[0] rounded-radius4 lg:w-[30px] xl:w-[34px] w-[38.62px] 2xl:w-[38px] 3xl:w-[46px]"></div>
                      <Text className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[0] lg:text-fs26 xl:text-fs30 text-fs34 3xl:text-fs40 text-left text-teal_900">
                        <span className="text-teal_700 font-inter">
                          <>{`S`}</>
                        </span>
                        <span className="text-teal_700 font-inter">
                          <>{`  `}</>
                        </span>
                        <span className="text-white_A700 font-inter">
                          <>{`aaspik`}</>
                        </span>
                      </Text>
                    </Stack>
                    <Column className="font-poppins mb-[0] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A701 w-[100%]">
                          {
                            <>
                              {`Manage your work efficiently and easily and it is a simple, fast and small task manager with a single`}
                              <br />
                              {`application.`}
                            </>
                          }
                        </Text>
                        <Image
                          src="img_subscirbe.svg"
                          className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[60%]"
                          alt="Subscirbe"
                        />
                      </Column>
                    </Column>
                  </Column>
                  <Column className="font-poppins items-start justify-start lg:mb-[23px] xl:mb-[27px] mb-[30.62px] 2xl:mb-[30px] 3xl:mb-[36px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] w-[14%]">
                    <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700">{`Service`}</Text>
                    <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Graphics Design`}</Text>
                    <Text className="font-normal xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Web Developement`}</Text>
                    <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Content Writing`}</Text>
                    <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Marketing`}</Text>
                  </Column>
                  <Row className="font-poppins items-start justify-between lg:mb-[23px] xl:mb-[27px] mb-[30.62px] 2xl:mb-[30px] 3xl:mb-[36px] lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] w-[51%]">
                    <Column className="items-start justify-start w-[23%]">
                      <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700">{`Resources`}</Text>
                      <Text className="font-normal lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Virtual Assistants`}</Text>
                      <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Accountants`}</Text>
                      <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Bookkeepers`}</Text>
                      <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Free trial`}</Text>
                    </Column>
                    <Column className="items-start justify-start xl:mb-[1px] lg:mb-[1px] mb-[2px] w-[17%]">
                      <Text className="font-semibold lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700">{`Company`}</Text>
                      <Text className="font-normal lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Patnerships`}</Text>
                      <Text className="font-normal xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Terms of use`}</Text>
                      <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Privacy`}</Text>
                      <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700">{`Sitemap`}</Text>
                    </Column>
                    <Column className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] w-[35%]">
                      <Column className="font-poppins w-[100%]">
                        <Column className="items-start justify-start w-[100%]">
                          <Text className="font-semibold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700">{`Get in touch`}</Text>
                          <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[100%]">{`You’ll find your next buisness quote you prefer.`}</Text>
                        </Column>
                      </Column>
                      <div className="3xl:mr-[12px] lg:mr-[7px] mr-[10px] w-[83%] xl:mr-[8px] input-wrap">
                        <Image
                          src="img_vector_1.svg"
                          className="absolute h-[16px] right-[12px] lg:h-[13px] lg:right-[9px] xl:h-[15px] xl:right-[10px] 2xl:h-[17px] 3xl:h-[20px] 3xl:right-[14px] my-[auto] inset-y-[0]"
                          alt="Vector"
                        />
                        <Button className="bg-gray_52 font-inter font-normal not-italic xl:pb-[11px] pb-[13.030001px] 2xl:pb-[13px] 3xl:pb-[15px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[43px] xl:pr-[49px] pr-[56px] 3xl:pr-[67px] xl:pt-[12px] pt-[14.030001px] 2xl:pt-[14px] 3xl:pt-[16px] lg:py-[10px] rounded-radius4 text-bluegray_500 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`Enter your mail`}</Button>
                      </div>
                    </Column>
                  </Row>
                </Row>
                <Text className="font-medium font-poppins lg:mb-[25px] xl:mb-[29px] mb-[32.77px] 2xl:mb-[32px] 3xl:mb-[39px] lg:mt-[52px] xl:mt-[59px] mt-[67.38px] 2xl:mt-[67px] 3xl:mt-[80px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_101">{`© 2022 SAASPIK. All rights reserved.`}</Text>
              </Column>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SaaSLandingPageDesignPage;
