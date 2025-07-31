# Oscillator_Sim

# Гармонічний осцилятор / Harmonic Oscillator

> Вебсимуляція механічних коливань за допомогою HTML, CSS та JavaScript.  
> Web simulation of a one-dimensional harmonic oscillator using HTML, CSS, and JavaScript.

---

## Опис / Description

Цей навчальний проєкт демонструє моделювання механічних коливань із можливістю налаштування параметрів, графічною візуалізацією та підтримкою кількох фізичних моделей.  
Симуляція відображає рух кульки у реальному часі та будує відповідні графіки зміщення та швидкості.

This educational project demonstrates the simulation of mechanical vibrations with the ability to configure parameters, graphical visualization, and support for multiple physical models. 
The simulation displays the movement of the ball in real time and builds the corresponding displacement and velocity graphs.

---

## Реалізовані моделі коливань
| Модель                   | Фізичний зміст                                                            |   |                                            |
| ------------------------ | ------------------------------------------------------------------------- | - | ------------------------------------------ |
| 1. Гармонічний осцилятор | $a = -\frac{kx}{m}$ — класичні пружинні коливання                         |   |                                            |
| 2. Вимушені коливання    | $a = \frac{-kx + F_0 \cos(\omega t)}{m}$ — коливання з зовнішньою силою   |   |                                            |
| 3. Тертя (знакове)       | $a = \frac{-kx - k_1 \cdot \text{sign}(v)}{m}$ — сухе (асиметричне) тертя |   |                                            |
| 4. Опір (лінійний)       | $a = \frac{-kx - \mu v}{m}$ — лінійне згасання                            |   |                                            |
| 5. Нелінійне тертя       | ( a = (-k * x - μ * v - k₁ * v * |v|) / m ) — залежність від квадрату швидкості  |   |                                            |
| 6. Биття                 | $x(t) = A \sin(f_1 t) + A \sin(f_2 t)$ — інтерференція двох частот        |   |                                            |



## Параметри / Parameters

Інтерфейс дозволяє змінювати наступні параметри:

- `m` — маса (кг)  
- `k` — жорсткість пружини (Н/м)  
- `x0` — початкова координата (м)  
- `v0` — початкова швидкість (м/с)  
- `t_max` — тривалість симуляції (с)  
- `dt` — часовий крок інтегрування (с)

The interface allows adjusting the following parameters:

- `m` — mass (kg)  
- `k` — spring stiffness (N/m)  
- `x0` — initial position (m)  
- `v0` — initial velocity (m/s)  
- `t_max` — simulation time (s)  
- `dt` — time step (s)

---

## 📊 Результат / Output

- Анімація руху кульки (в реальному часі)  
- Графік

- Animation of the ball’s motion (in real-time)  
- Graph

---

## ▶️ Як запустити / How to Run

Просто відкрийте `index.html` у вашому браузері:

Just open `index.html` in your browser:

```bash
# або подвійний клік
open index.html
