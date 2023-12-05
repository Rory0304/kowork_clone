import * as yup from "yup";
import { checkIsValidDate } from "app/utils/date";

declare module "yup" {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    checkIsFullDateFormat(date: string): this;
    checkIsYearMonthDateFormat(date: string): this;
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

export default yup;
