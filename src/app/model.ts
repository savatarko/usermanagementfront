export interface TokenDto{
  token:string
}



export interface UserDto{
  id:number,
  name:string,
  surname:string,
  email:string,
  permissions:string[]
}

export interface CreateUserDto{
  name:string,
  surname:string,
  email:string,
  password:string,
  permissions:string[]
}

export interface ReadUsersDto{
  users:UserDto[]
}

export interface AddVacuumDto{
  name:string
}


export interface VacuumSearchDto{
  name:string
  dateFrom:string
  dateTo:string
}

export interface VacuumDto{
  id:number,
  status:string,
  name:string,
  isChanging:boolean,
  dateAdded:string,
  active:boolean
}

export interface ReadVacuumDto{
  vacuums:VacuumDto[]
}

export interface ScheduleDto{
  usisivacid:number,
  status:string,
  time:Date,
  jwt:string
}

export interface ErrorDto{
  message:string,
  operation:string,
  date:string,
  usisivacName:string
}

export interface ErrorsDto{
  errors:ErrorDto[]
}
