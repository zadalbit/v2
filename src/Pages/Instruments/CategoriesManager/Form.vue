<template>
    <AppLayout>
        <template v-slot:breadcrumbs>
            <strong>
                <router-link :to="{ name: 'homepage'}">Головна</router-link> > 
                <router-link :to="{ name: 'instruments'}">Каталог інструментів</router-link> > 
                Менеджер категорій > 
                Форма
            </strong>
        </template>
        <template v-slot:content>
            <div class="col-lg-12">
                <hr>
                <h3>Загальні дані:</h3><br>
                <div class="form-group">
                    <label for="input_category_name">Батьківська категорія:</label>
                    <select class="form-control" v-model="category.parent_id">
                        <option value="0" selected>Відсутня</option>
                        <option v-for="(category, index) in createData.categories" :key="index" :value="category.id">{{ category.name }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="input_category_name">Назва:</label>
                    <input type="text" class="form-control" name="name" id="input_category_name" placeholder="Введіть назву" v-model="category.name">
                </div>
                <button type="submit" class="btn btn-success form-control" @click="store()">Зберегти</button>
            </div>
        </template>
    </AppLayout>
</template>

<script>
import Api from '@/Services/Api'
import AppLayout from '@/Layouts/AppLayout.vue'

export default {
    name: 'CategoriesManagerFormPage',
    components: {
        AppLayout
    },
    data() {
        return {
            category: {
                parent_id: 0,
                name: ''
            },
            createData: {
                categories: [],
            }
        }
    },
    mounted: function() {
        this.create();
    },
    methods: {
        create: function() {
            var instance = this;
            var where = {
                where_statements: [
                    {
                        column: 'parent_id',
                        operator: '=',
                        value: 0,
                    }
                ]
            };

            Api().get('instruments/categories?where=' + JSON.stringify(where))
                .then(function(result) {
                    instance.createData.categories = result.data.data.categories;
                })
                .catch(function (error) {
                   console.log(error);
                });
        },
        store: function() {
            var instance = this;

            var data = new FormData();

            var request_array_name = 'category';
            
            data.append(request_array_name + '[name]', instance.category.name)

            Api().post('instruments/categories', data)
                .then(function(result) {

                    if (result.data.error == true) {
                        instance.$notify({
                          group: 'foo',
                          type: 'error',
                          title: 'Error',
                          text: result.data.message
                        });
                    } else {
                        instance.$router.push({ name: 'successpage', query: { title: 'Успіх!', message: 'Категорію успішно збережено.', backtitle: 'Повернутись до форми', backlink: 'categories-manager-form', nexttitle: 'Перейти до каталогу', nextlink: 'categories-manager' } });
                    }
                })
                .catch(function (error) {
                   console.log(error);
                   instance.$notify({
                      group: 'foo',
                      type: 'error',
                      title: 'Error',
                      text: 'Щось пішло не так, перевірте консоль'
                    });
                });
        }
    }
}
</script>
