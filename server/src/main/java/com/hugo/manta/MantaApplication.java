package com.hugo.manta;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.hugo.manta.mapper")
public class MantaApplication {

    public static void main(String[] args) {
        SpringApplication.run(MantaApplication.class, args);
    }

}
