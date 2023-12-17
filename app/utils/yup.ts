import * as yup from "yup";
import { checkIsValidDate,isDateAfterThreshold,  convertToFormatDateWithComma } from "app/utils/date";

declare module "yup" {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    checkIsFullDateFormat(errorMessage: string): this;
    checkIsYearMonthDateFormat(errorMessage: string): this;
    checkIsDateAfterThreshold(threshold: yup.Reference, errorMessage: string): this;
  }
}

yup.addMethod(
  yup.string,
  "checkIsYearMonthDateFormat",
  function (errorMessage) {
    return this.test(`YYYY/MM`, errorMessage, function (value) {
      const { path, createError } = this;

      const formattedDate = value?.replace(/\D/g, "");

      const year = Number(formattedDate?.substring(0, 4));
      const month = Number(formattedDate?.substring(4, 6));

      return (
        checkIsValidDate(year, month) ||
        createError({ path, message: errorMessage })
      );
    });
  }
);

yup.addMethod(yup.string, "checkIsFullDateFormat", function (errorMessage) {
  return this.test(`YYYY/MM/DD`, errorMessage, function (value) {
    const { path, createError } = this;

    const formattedDate = value?.replace(/\D/g, "");

    const year = Number(formattedDate?.substring(0, 4));
    const month = Number(formattedDate?.substring(4, 6));
    const day = Number(formattedDate?.substring(6, 8));

    return (
      checkIsValidDate(year, month, day) ||
      createError({ path, message: errorMessage })
    );
  });
});

yup.addMethod(
  yup.string,
  "checkIsDateAfterThreshold",
  function (threshold: string, errorMessage: string) {
    return this.test({
      name: 'checkIsDateAfterThreshold',
      message: errorMessage,
      params: {
        threshold
      },
      test(value){
        const { path, createError } = this;

        if(value && threshold){
          const targetDate = convertToFormatDateWithComma(value);
          const thresholdDate = convertToFormatDateWithComma(this.resolve(threshold));

          return isDateAfterThreshold(targetDate, thresholdDate) || createError({path, message: errorMessage})
        }
      }
    })}
);



export default yup;
