<script setup>
const queryParams = new URLSearchParams(window.location.search);
const isSuccess = queryParams.get('success')
const msg = queryParams.get('msg')
</script>

<div align="center">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 50 50" xml:space="preserve" width="30%" v-if="isSuccess">
<circle style="fill:#25AE88;" cx="25" cy="25" r="25"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="
	38,15 22,33 12,25 "/>
</svg>
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 50 50" xml:space="preserve" width="30%"  v-if="!isSuccess">
<circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16 
	"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34 
	"/>
</svg>
<br />

# 绑定{{isSuccess ? '成功' : '失败'}}

{{ msg }}

</div>
