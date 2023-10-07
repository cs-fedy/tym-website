export default interface Step {
  id: string
  name: string
  // options contains the list of services related to this step.
  // Options is an array: array of services without next step
  // Options is a record: mapping service id to next step or steps
  options: Record<string, string | Array<string>> | Array<string>
  canHaveMultipleSelect: boolean
}
