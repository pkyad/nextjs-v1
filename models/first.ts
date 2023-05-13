export interface model1 {
	val1: string
	val2: string
	var3: boolean
	var4: string
	var5: number
	var6: number[]
	var7: number[]
	var8: number[]
	var9: number[]
}

interface Task {
	userId: number
	id: number
	title: string
	completed: boolean
}

export interface helloResponseType {
	tasks: Task[]
	testObj?: model1
}
