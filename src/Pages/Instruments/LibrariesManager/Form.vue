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
                <h3>Загальні дані:</h3><br>
                <div class="form-group">
                    <label for="input_project_name">Назва:</label>
                    <input type="text" class="form-control" name="name" id="input_library_name" placeholder="Введіть назву" v-model="library.name">
                </div>
                <button type="submit" class="btn btn-success form-control" @click="store()">Зберегти</button>
            </div>
        </template>
    </AppLayout>
</template>

<script>
import Api from '@/Services/Api'
import AppLayout from '@/Layouts/AppLayout.vue'

/*To do:
Бібліотека допоміжних функцій опрацювання виводу проекції анімації руху елемента по осям координат з різних точок зору
+ функції утворення 2д проекцій з 3д моделей*/

export default {
    name: 'LibrariesManagerFormPage',
    components: {
        AppLayout
    },
    data() {
        return {
            library:{
                name: '',
            }
        }
    },
    mounted: function() {
        //
    },
    methods: {
        store: function() {
            var instance = this;

            var data = new FormData();
            
            data.append('library[name]', instance.library.name)

            Api().post('instruments/libraries', data)
                .then(function(result) {

                    if (result.data.error == true) {
                        instance.$notify({
                          group: 'foo',
                          type: 'error',
                          title: 'Error',
                          text: result.data.message
                        });
                    } else {
                        instance.$router.push({ name: 'successpage', query: { title: 'Успіх!', message: 'Бібліотеку успішно збережено.', backtitle: 'Повернутись до форми', backlink: 'libraries-manager-form', nexttitle: 'Перейти до каталогу', nextlink: 'libraries-manager' } });
                    }
                })
                .catch(function (error) {
                   console.log(error);
                   instance.$notify({
                      group: 'foo',
                      type: 'error',
                      title: 'Error',
                      text: 'Something went wrong, check console'
                    });
                });
        }
    }
}
</script>
