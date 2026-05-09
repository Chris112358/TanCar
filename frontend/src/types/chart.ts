export interface Chart {
    
  labels: Array<string>,
  data:[
    {
      label:string,
      data:Array<number>
    }
  ]
}