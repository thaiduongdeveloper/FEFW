<!-- 
    - Reactive: là cơ chế trong vue để theo dõi và cập nhật giao diện tự động khi dữ liệu thay đổi

    - Trong các úng dụng Single Page Application: 
    + Reactive State: là trạng thái dữ liệu trong vue được quản lý theo Reactive System giúp tự động cập nhật các thành phền của giao diện 
    người dùng khi dữ liệu thay đổi
    + Sử dụng Virtual DOM để hiển thị giao diện khi trạng thái thay đổi

    - Các cách khai báo Reactive State trong vue.js
    + Options API: Sử dụng phương pháp data()
    + Composition API: Sử dụng phương pháp ref() và reactive()
-->

<script setup>
    import { reactive, ref } from 'vue';
    
    // Sử dụng ref trong vue.js
    // ref(): chỉ nhận 1 đối số và trả về một giá trị có thuộc tính là .value
    // ref(): thường sử dụng cho các kiểu dữ liệu nguyên thủy như: number, string, boolean,...

    // Đây được gọi là một state
    const count = ref(1);
    const name = ref("Hoàng Thái Dương");
    const boolean = ref(true);
    
    // Sử dụng giá trị của ref()
    console.log(count.value);
    console.log(name.value);
    console.log(boolean.value);

    // Sử dụng Reactive() trong vue.js
    // - Là cách thứ 2 để khai báo 1 State trong vue.js
    // - Chỉ áp dụng cho dữ liệu là kiểu đối tượng 
    // - Không chấp nhận chuỗi string, number, boolean
    // - Không cần sử dụng thuộc tính .value để lấy giá trị
    const student = reactive({
        name: "Hoàng Thái Dương",
        gender: "Nam",
        date: 2005,
        gpa: 9.0,
        isActive: true
    })
    // Lấy ra giá trị của reactive()
    console.log(student.name);
    console.log(student.gender);
    console.log(student.date);

    // Action
    function myFunc()
    {
        count.value++
    }
    myFunc();
</script>

<template>
    <!-- View -->
    <h1>{{ count }}</h1>

    <!-- Lấy giá trị của ref -->
     <h1>{{ name }}</h1>
     <h1>{{ boolean }}</h1>

    <!-- Hiển thị giá trị của reactive -->
     <h1>{{ student.name }}</h1>
     <h1>{{ student.isActive }}</h1>
     <h1>{{ student.gpa }}</h1>
</template>

<style scoped>

</style>