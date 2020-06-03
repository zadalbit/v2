<template>
    <table class="main-table">
        <tr>
            <td valign="middle" class="text-center main-td">
                <table>
                    <tr>
                        <td valign="bottom">
                            <router-link class="main-link" :to="{ name: 'documentations'}">
                                <img alt="Документації" :src="docs_icon" height="75">
                                <h4>Документації</h4>
                            </router-link>
                        </td>
                        <td valign="bottom">
                            <h4>/</h4>
                        </td>
                        <td valign="bottom">
                            <router-link class="main-link" :to="{ name: 'instruments'}">
                                <img alt="Інструменти" :src="instruments_icon" height="80">
                                <h4>Інструменти</h4>
                            </router-link>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</template>

<script>
import docs_icon from "@/assets/images/docs.png";
import instruments_icon from "@/assets/images/instruments.png";

export default {
    name: 'Homepage',
    data() {
        return {
            docs_icon: docs_icon,
            instruments_icon: instruments_icon,
        }
    },
}
</script>
