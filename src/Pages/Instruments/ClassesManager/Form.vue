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
                <h4>To do:</h4>
                <ol>
                    <li>
                        <strong>(form-group)</strong><br>
                        Main | &#60;label&#62;Категорія:&#60;/label&#62;<br>
                        ----------------------------------------------------- <br>
                        Main | &#60;input type="checkbox"&#62;Бібліотека<br>
                        Main | &#60;input type="checkbox"&#62;Проект
                    </li>
                    <li>
                        <strong>(form-group)</strong><br>
                        формат: PSR-4 https://www.php-fig.org/psr/psr-4/<br>
                        ----------------------------------------------------- <br>
                        Main | &#60;label&#62;Назва класу:&#60;/label&#62;<br>
                        Main | &#60;input type="text"&#62;Назва класу<br>
                    </li>
                    <li>
                        <strong>(form-group)</strong><br>
                        формат: кннопковий інтерфейс/<br>
                        Опис: постійна альтернатива всім визначеним умовами гілкам розвитку сценарію виконання завдання<br>
                        запитання (категорія: рефакторинг): чи наступна операція/команда це визначення умов для нової гілки // чи це if</li>
                        ----------------------------------------------------- <br>
                        Main | &#60;selectbox&#62;операція/команда&#60;/selectbox&#62;<br>
                        Main | &#60;option&#62;"розгалудження варіантів виконання"&#60;/option&#62;<br>
                        ----------------------------------------------------- <br>
                        sub 1 | &#60;selectbox&#62;категорія&#60;/selectbox&#62;<br>
                        sub 1 | &#60;option&#62;оператори&#60;/option&#62;<br>
                        ----------------------------------------------------- <br>
                        sub 2 | &#60;selectbox&#62;розділ&#60;/selectbox&#62;<br>
                        sub 2 | &#60;option&#62;else&#60;/option&#62;<br>
                    </li>
                    <li>
                        <strong>(модалка)</strong><br>
                        Обрати проект
                    </li>
                    <li>
                        <strong>(модалка)</strong><br>
                        додати проекти
                    </li>
                </ol>
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
