import { useFormik } from "formik"
import * as Yup from "yup"
import Input from "../input"
import TextArea from "../text-area"
import { useServices } from "./services-context"

type InitialValues = {
  fullName: string
  email: string
  phoneNumber: number
  business: string
  message: string
}

export default function UserForm() {
  const { totalPrice } = useServices()

  const { handleSubmit, values, handleChange } = useFormik({
    validateOnChange: false,
    initialValues: {} as InitialValues,
    validationSchema: Yup.object({
      fullName: Yup.string().required("full name is required"),
      email: Yup.string()
        .email("invalid email format")
        .required("full name is required"),
      phoneNumber: Yup.number().required("phone number is required"),
      business: Yup.string().required("business name is required"),
      message: Yup.string().optional(),
    }),
    onSubmit: (state) => {
      console.log(state)
    },
  })

  return (
    <form onSubmit={handleSubmit} className="w-2/3 mx-auto mb-16">
      <div className="flex w-full flex-col space-y-10 items-center">
        <div className="flex flex-col space-y-1 items-center max-w-xs">
          <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-[0.01px] text-junior-red">
            Coût final
          </h1>

          <span className="text-xs font-medium text-junior-gray">
            Le prix final estimé est:
          </span>

          <span className="text-junior-red font-bold pt-2 text-sm lg:text-base xl:text-lg">
            {totalPrice}TND
          </span>
        </div>

        <div className="flex flex-col items-center w-full space-y-4">
          <Input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="votre nom et prenom"
            icon={<i className="fa-solid fa-user text-sm"></i>}
            label="nom et prenom"
          />
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="votre email"
            icon={<i className="fa-solid fa-envelope"></i>}
            label="addresse email"
          />
          <Input
            type="number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            placeholder="votre numero de telephone"
            icon={<i className="fa-solid fa-phone"></i>}
            label="numero de telephone"
          />
          <Input
            type="text"
            name="business"
            value={values.business}
            onChange={handleChange}
            placeholder="votre business"
            icon={<i className="fa-solid fa-briefcase"></i>}
            label="business"
          />
          <TextArea
            value={values.message}
            onChange={handleChange}
            icon={<i className="fa-solid fa-comment"></i>}
            label="message"
            placeholder="votre message"
          />

          <button
            className="px-6 py-3 font-bold text-xs w-full text-junior-white capitalize rounded-md flex-col flex items-center space-y-4 text-center bg-junior-red"
            type="submit"
          >
            demender un devis maintenant
          </button>
        </div>
      </div>
    </form>
  )
}
