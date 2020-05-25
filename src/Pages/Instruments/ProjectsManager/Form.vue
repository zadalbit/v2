<template>
    <AppLayout>
        <template v-slot:breadcrumbs>
            <strong>
                <router-link :to="{ name: 'homepage'}">Головна</router-link> > 
                <router-link :to="{ name: 'instruments'}">Каталог інструментів</router-link> > 
                Менеджер проектів > 
                Форма
            </strong>
        </template>
        <template v-slot:content>
            <div class="col-lg-12">
                <hr>
                <h3>Форма:</h3><br>
                <ProjectsManagerForm></ProjectsManagerForm>
            </div>
        </template>
    </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'
import ProjectsManagerForm from '@/Components/Forms/ProjectsManagerForm.vue'

export default {
    name: 'ProjectsManagerFormPage',
    components: {
        AppLayout,
        ProjectsManagerForm
    },
}
</script>
