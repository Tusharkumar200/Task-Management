import {Form , FormControl, FormField, FormItem, FormLabel} from "../ui/form";

function CommonForm({formControls=[], handleSubmit, form, btnText}) {
  return (
      <Form>
        <form>
          {
            formControls?.length > 0 ? 
            FormControl.map(controlItem=>(
              <FormField 
                control ={form.control}
                name = {controlItem.id}
                render ={
                  ({field})=>{
                    return <FormItem>
                      <FormLabel>{controlItem.label }</FormLabel>
                    </FormItem>
                  }
                }
              />
            ))
          }
        </form>
      </Form>
  )
}

export default CommonForm;