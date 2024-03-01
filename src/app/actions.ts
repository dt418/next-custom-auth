"use server";

import { ActionResult } from "./typings/action-result";

export async function signUp(prevState: any, formData: FormData): Promise<ActionResult> {
    console.log(formData);
    return {
        error: ""
    }
}