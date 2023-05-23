import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { FC, useState } from "react";
import { useFormik } from "formik";

const Contact: FC = () => {
  const [accept, setAccept] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container mx-auto lg:py-20 md:py-10 py-5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
        Contact Me
      </h1>
      <div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Your message" />
            </div>
            <Textarea
              id="message"
              placeholder="Leave a comment..."
              required={true}
              rows={4}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              onChange={() => setAccept(!accept)}
              checked={accept}
            />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div>
            <Button
              outline={true}
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={!accept}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
