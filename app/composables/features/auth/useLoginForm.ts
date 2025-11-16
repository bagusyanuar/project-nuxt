import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { loginSchema, type LoginSchema } from "~/schemas/auth/login.schema";
import { usePageLoader } from "~/composables/components/pageLoader";

export const useFormlogin = () => {
  const router = useRouter()
  const { startPageLoader, endPageLoader } = usePageLoader();
  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(loginSchema),
  });

  const { value: email, errorMessage: emailError } = useField<
    LoginSchema["email"]
  >("email", undefined, { initialValue: "" });
  const { value: password, errorMessage: passwordError } = useField<
    LoginSchema["password"]
  >("password", undefined, { initialValue: "" });

  const onSubmit = async () => {
    startPageLoader();
    await new Promise((r) => setTimeout(r, 2000));

    const isValid = await handleSubmit((values: LoginSchema) => {
      console.log(values);
    })();

    if (!isValid) {
      console.log("Email error:", emailError.value);
      console.log("Password error:", passwordError.value);
    }

    endPageLoader();

    router.push('/dashboard')
  };

  return {
    email,
    emailError,
    password,
    passwordError,
    onSubmit,
  };
};
