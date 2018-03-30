<template>

<div>
	
	<table border="2" cellspacing="0" cellpadding="0">
		<tr v-for="i in arr">
<td>{{i.id|zongshu}} </td>
<td>{{i.tit|zongshu}}</td>
<td>{{i.con|zongshu}}<button>X</button><button id="jia">+</button></td>


</tr>

</table>

</div>
</template>

<script>
	
	
	export default {
		data(){
			return{
				
				arr:[]
			}
			
		},
		created(){
			this.$http.get("http://localhost:8000").then(e=>this.arr=e.body)
		}
		}
		
	
	
</script>

<style>
	table{
		border: 1 solid red;
	}
</style>