import { FormikProps } from "formik";

export function getFormErrorMessage(form: FormikProps<any>, formField: string){
    return form.touched[formField] && form.errors[formField]
}

export function showFormErrorMessage(form: FormikProps<any>, formField: string){
    return !!(form.touched[formField] && form.errors[formField])
}