/* top buttons */

document.getElementById('topPayButton').addEventListener('click', function() {
    window.location.href = 'https://order.pay.naver.com/home';
});

document.getElementById('topShoppingButton').addEventListener('click', function() {
    window.location.href = 'https://shopping.naver.com/cart';
});

// 네이버 검색
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search_form');
    const searchInput = document.querySelector('.search_input');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchQuery = searchInput.value.trim();
        
        if (searchQuery) {
            window.location.href = `https://search.naver.com/search.naver?query=${encodeURIComponent(searchQuery)}`;
        }
    });
});


// 뉴스스탠드 그리드뷰
document.addEventListener('DOMContentLoaded', function() {
    const newsstand = {
        currentCategory: 'all',
        currentPage: 1,
        itemsPerPage: 8,
        totalPages: 5, 

        init() {
            this.bindEvents();
            this.renderGrid();
            this.renderPagination();
        },

        bindEvents() {
            // 카테고리 클릭 이벤트
            document.querySelectorAll('.category-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    this.currentCategory = e.target.dataset.category;
                    this.currentPage = 1;
                    this.updateActiveCategory(e.target);
                    this.renderGrid();
                    this.renderPagination();
                });
            });

            // 페이지네이션 이벤트
            document.querySelector('.prev').addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.renderGrid();
                    this.renderPagination();
                }
            });

            document.querySelector('.next').addEventListener('click', () => {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                    this.renderGrid();
                    this.renderPagination();
                }
            });
        },

        updateActiveCategory(clickedItem) {
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');
        },

        renderGrid() {
            const gridContainer = document.querySelector('.grid-container');
            gridContainer.innerHTML = '';

            // 예시 데이터 생성
            for (let i = 0; i < this.itemsPerPage; i++) {
                const item = document.createElement('div');
                item.className = 'grid-item';
                item.innerHTML = `
                    <h3>${this.currentCategory} 콘텐츠 ${(this.currentPage - 1) * this.itemsPerPage + i + 1}</h3>
                    <p>여기에 실제 콘텐츠가 들어갑니다.</p>
                `;
                gridContainer.appendChild(item);
            }
        },

        renderPagination() {
            const pageNumbers = document.querySelector('.page-numbers');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');

            // 이전/다음 버튼 상태 업데이트
            prevBtn.disabled = this.currentPage === 1;
            nextBtn.disabled = this.currentPage === this.totalPages;

            // 페이지 번호 생성
            pageNumbers.innerHTML = '';
            for (let i = 1; i <= this.totalPages; i++) {
                const pageNumber = document.createElement('button');
                pageNumber.className = `page-number ${i === this.currentPage ? 'active' : ''}`;
                pageNumber.textContent = i;
                pageNumber.addEventListener('click', () => {
                    this.currentPage = i;
                    this.renderGrid();
                    this.renderPagination();
                });
                pageNumbers.appendChild(pageNumber);
            }
        }
    };

    newsstand.init();
});