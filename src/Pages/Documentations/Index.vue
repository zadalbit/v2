<template>
    <AppLayout>
        <template v-slot:breadcrumbs>
            <strong><router-link :to="{ name: 'homepage'}">Головна</router-link> > Каталог документацій</strong>
        </template>
        <template v-slot:content>
            <div class="col-lg-12">
                <!-- // -->
            </div>
        </template>
    </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'

export default {
    name: 'DocumentationsIndex',
    components: {
        AppLayout
    }
}
</script>
