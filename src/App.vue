<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import {verificationUserAndCode} from "@/api/system/user";
onLaunch(() => {
  console.log("App Launch");
});
onShow(async () => {
  const result = await verificationUserAndCode({
    password: '123456',
    username: 'admin'
  })
  console.log("测试apifox",result);
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
