<template>
    <AppLayout>
        <template v-slot:breadcrumbs>
            <strong>
                <router-link :to="{ name: 'homepage'}">Головна</router-link> > 
                Дія успішно виконана
            </strong>
        </template>
        <template v-slot:content>
            <div class="col-lg-12 text-center">
                <div class="alert alert-success text-center" style="display: inline-block;padding: 0px 80px; padding-bottom:20px;" role="alert">
                    <h3>{{ title }}</h3>
                    <p>{{ message }}</p>
                    <p><router-link :to="{ name: backlink }">{{ backtitle }} &lt;</router-link> | <router-link :to="{ name: nextlink }">&gt; {{ nexttitle }}</router-link></p>
                </div>
            </div>
        </template>
    </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'

export default {
    name: 'SuccessPage',
    components: {
        AppLayout
    },
    data() {
        return {
            title: this.$router.currentRoute.query.title,
            message: this.$router.currentRoute.query.message,
            backtitle: this.$router.currentRoute.query.backtitle,
            backlink: this.$router.currentRoute.query.backlink,
            nexttitle: this.$router.currentRoute.query.nexttitle,
            nextlink: this.$router.currentRoute.query.nextlink,
        }
    }
}
</script>