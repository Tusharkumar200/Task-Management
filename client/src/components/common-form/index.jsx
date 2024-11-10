import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "@/components/ui/input"; // Add missing import
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"; // Add missing import
import CommonButton from "@/components/ui/common-button"; // Add missing import

function CommonForm({ formControls = [], handleSubmit, form, btnText }) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {formControls?.length > 0
          ? formControls.map((controlItem) => (
              <FormField
                key={controlItem.id}
                control={form.control}
                name={controlItem.id}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{controlItem.label}</FormLabel>
                      {controlItem.componeneType === "input" ? (
                        <FormControl>
                          <Input
                            placeholder={controlItem.placeholder}
                            type={controlItem.type}
                            {...field}
                            className="w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </FormControl>
                      ) : controlItem.componeneType === "select" ? (
                        <Select>
                          <FormControl>
                            <SelectTrigger className="w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                              select
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {controlItem.options.map((optionItem) => (
                              <SelectItem
                                key={optionItem.value}
                                className="text-black cursor-pointer focus:text-black"
                              >
                                {optionItem.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : null}
                    </FormItem>
                  );
                }}
              />
            ))
          : null}
        <CommonButton type={"submit"} buttonText={btnText} />
      </form>
    </Form>
  );
}

export default CommonForm;