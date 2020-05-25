<template>
    <AppLayout>
        <template v-slot:breadcrumbs>
            <strong>
                <router-link :to="{ name: 'homepage'}">Головна</router-link> > 
                <router-link :to="{ name: 'instruments'}">Каталог інструментів</router-link> > 
                Менеджер класів/об'єктів > 
                Форма
            </strong>
        </template>
        <template v-slot:content>
            <div class="col-lg-12">
                <hr>
                <h3>Загальні дані:</h3><br>
                Категорія:
                Бібліотека
                Проект

                Обрати проект (модалка - додати проекти)
                Створити проект
                PSR-4 https://www.php-fig.org/psr/psr-4/
            </div>
        </template>
    </AppLayout>
</template>

<script>
import Api from '@/Services/Api'
import AppLayout from '@/Layouts/AppLayout.vue'

export default {
    name: 'ClassesManagerFormPage',
    components: {
        AppLayout
    },
    data() {
        return {
            createData: {
                classes: [],
                projects: [],
                libraries: [],
            }
        }
    },
    mounted: function() {
        this.create();
    },
    methods: {
        create: function() {
            //var instance = this;
            Api().get('instruments/classes/create')
                .then(function(result) {
                    console.log(result);
                })
                .catch(function (error) {
                   console.log(error);
                });
        }
    }
}
</script>
